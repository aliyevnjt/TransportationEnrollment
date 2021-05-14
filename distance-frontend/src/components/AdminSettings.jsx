import React, { useEffect, useState } from 'react';
import { Button, InputGroup, Row } from 'react-bootstrap';
import axios from 'axios';
import InputComponent from './toolbox/InputComponent';
import { schoolYears, registration } from '../data/Data';
import Dropdown from './toolbox/Dropdown';

function AdminSettings() {
  // FIXME initial values do not populate for year and regStatus
  // Bonus: reset to default(saved version from DB)

  const [saveButton, setSaveButton] = useState(true);
  // const [checkButtonStatus, setCheckButtonStatus] = useState([false,false]);
  const [checkButtonStatus1, setCheckButtonStatus1] = useState(false);
  const [checkButtonStatus2, setCheckButtonStatus2] = useState(false);
  const [adminSettings, setAdminSettings] = useState({});
  const baseURL = process.env.REACT_APP_BASE_URL;
  let allData;
  let currentData;
  //TODO Write adminsettings to session data and send request in App.js once. 
  useEffect(() => {
    async function fetchData() {
      // FETCH all admin settings
      const res = await axios.get(`${baseURL}/adminSettings`);
      allData = res.data;
      console.log('All Data:', allData);
      currentData = allData.filter((obj) => obj.activeInd === 'Y');
      console.log('Current Data:', currentData[0]);
      setCheckButtonStatus1(currentData[0].notification1Status);
      setCheckButtonStatus2(currentData[0].notification2Status);
      setAdminSettings(currentData[0]);
    }
    fetchData();
    console.log("in use effect admin settings",adminSettings)
  }, []);

  const handleSubmit = async (event) => {
    if (event) {
      event.preventDefault();
      // TODO check the response and add a message as "successfully saved!"
      try {
        const res = await axios.put(`${baseURL}/updateSettings`, adminSettings);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    }
  };
  const handleInputChange = (event) => {
    //  console.log(event);
    setAdminSettings((previous) => ({
      ...previous,
      [event.target.id]: event.target.value,
    }));
    setSaveButton(false);
  };
  const handleDropdownChange = (event) => {
    handleInputChange(event);
    setSaveButton(false);
  };
  // FIXME saveButton's state must be tied to checkButtonStatus
  // when the notification is checked, DB must be updated so next time its state can be populated correctly
  // must be shown on the registration page if checked
  // const handleCheckButton = (event) => {
  //   const boxNumber = event.target.id.indexOf('1')=== -1 ? 1 : 0;
  //   console.log("checkbox event",checkButtonStatus[boxNumber])
  //   setAdminSettings((previous) => ({
  //     ...previous,
  //     [event.target.id]: !checkButtonStatus[boxNumber],
  //   }));
  //   setCheckButtonStatus(checkButtonStatus.map((item, index) => {
  //     index === boxNumber ? !checkButtonStatus[boxNumber] : item
  //   }));
  //   setSaveButton(false);
    
  // };

  const handleCheckButton1 = (event) => {
    setAdminSettings((previous) => ({
      ...previous,
      [event.target.id]: !checkButtonStatus1,
    }));
    setCheckButtonStatus1(!checkButtonStatus1);
    setSaveButton(false);
    
  };

  const handleCheckButton2 = (event) => {
    setAdminSettings((previous) => ({
      ...previous,
      [event.target.id]: !checkButtonStatus2,
    }));
    setCheckButtonStatus2(!checkButtonStatus2);
    setSaveButton(false);
    
  };


  const handleSave = (event) => {
    event.preventDefault();
    handleSubmit(event);
    setSaveButton(true);
  };

  return (
    <>
      <Row>
        <Dropdown
          id="adminYear"
          onChange={handleInputChange}
          label="Bus Registration Year"
          options={schoolYears}
          value={
            adminSettings.adminYear
              ? schoolYears.filter(
                  obj => obj.adminYear === adminSettings.adminYear
                )[0].label
              : ''
          }
        />
      </Row>
      <Row>
        <Dropdown
          id="regStatus"
          onChange={handleDropdownChange}
          label="Registration Status"
          value={adminSettings.regStatus}
          options={registration}
        />
      </Row>
      <div>
        <Row>
          <InputComponent
            buttonText="Open"
            id="openMessage"
            value={adminSettings.openMessage}
            onChange={handleInputChange}
          />
        </Row>
        <br />
        <Row>
          <InputComponent
            buttonText="Closed"
            id="closedMessage"
            value={adminSettings.closedMessage}
            onChange={handleInputChange}
          />
        </Row>
        <br />
        <InputGroup.Prepend>
          <InputGroup.Checkbox
            id="notification1Status"
            aria-label="Checkbox for following text input"
            checked={adminSettings.notification1Status}
            onClick={handleCheckButton1}
          />
          <InputComponent
            buttonText="Notification 1"
            id="notification1"
            onChange={handleInputChange}
            value={adminSettings.notification1}
          />
        </InputGroup.Prepend>
        <InputGroup.Prepend className="mt-3">
          <InputGroup.Checkbox
            id="notification2Status"
            aria-label="Checkbox for following text input"
            checked={adminSettings.notification2Status}
            onClick={handleCheckButton2}
          />
          <InputComponent
            buttonText="Notification 2"
            id="notification2"
            onChange={handleInputChange}
            value={adminSettings.notification2}
          />
        </InputGroup.Prepend>
      </div>
      <br />
      <Button
        disabled={saveButton}
        size="lg"
        as="input"
        id="adminSettings"
        type="submit"
        value="Save"
        onClick={handleSave}
      />
    </>
  );
}
export default AdminSettings;
