import React, { useEffect, useState } from 'react';
import {
  Button, InputGroup, Row
} from 'react-bootstrap';
import axios from 'axios';
import InputComponent from './toolbox/InputComponent';
import { schoolYears, registration, baseURL } from '../data/Data';
import Dropdown from './toolbox/Dropdown';

function AdminSettings() {
  // FIXME initial values do not populate for year and regStatus
  // Bonus: reset to default(saved version from DB)

  const [saveButton, setSaveButton] = useState(true);
  const [checkButtonStatus, setCheckButtonStatus] = useState(false);
  const [adminSettings, setAdminSettings] = useState({});
  let allData;
  let currentData;

  useEffect(() => {
    async function fetchData() {
      // FETCH all admin settings
      const res = await axios.get(`${baseURL}/adminSettings`);
      allData = res.data;
      console.log(allData);
      currentData = allData.filter((obj) => obj.activeInd === 'Y');
      console.log(currentData[0]);
      setAdminSettings(currentData[0]);
    }
    fetchData();
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
    console.log(event);
    setAdminSettings((previous) => ({ ...previous, [event.target.id]: event.target.value }));
    setSaveButton(false);
  };
  const handleDropdownChange = (event) => {
    handleInputChange(event);
    setSaveButton(false);
  };
    // FIXME saveButton's state must be tied to checkButtonStatus
    // when the notification is checked, DB must be updated so next time its state can be populated correctly
    // must be shown on the registration page if checked
  const handleCheckButton = () => {
    setCheckButtonStatus(!checkButtonStatus);
    setSaveButton(false);
  };
  const handleSave = (event) => {
    event.preventDefault();
    console.log(event);
    console.log('===========');
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
              ? schoolYears.filter((obj) => obj.adminYear === adminSettings.adminYear)[0].label
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
            name="notification"
            aria-label="Checkbox for following text input"
            checked={checkButtonStatus}
            onClick={handleCheckButton}
          />
          <InputComponent
            buttonText="Notification"
            id="notification1"
            onChange={handleInputChange}
            value={adminSettings.notification1}
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
