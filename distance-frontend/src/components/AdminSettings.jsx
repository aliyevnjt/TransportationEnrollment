import React, { useEffect, useState } from 'react';
import {
  Button, InputGroup, Row
} from 'react-bootstrap';
import axios from 'axios';
import InputComponent from './toolbox/InputComponent';
import { schoolYears, registration, baseURL } from '../data/Data';
import Dropdown from './toolbox/Dropdown';

function AdminSettings() {
  // TODO
  // Bonus: reset to default(saved version from DB)
  // Different defaults for each year

  // FIXME DB should have more meaningful column names rather than message 1,2,3
  // const [message, setMessage] = useState({
  //   open: 'earlyReg',
  //   closed: 'lateReg',
  //   notification: 'notification',
  // });
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
      // FIXME this is temporary. send adminSettings only once the DB has the same values
      const tempSettings = {
        value: adminSettings.value,
        message1: adminSettings.message1,
        message2: adminSettings.message2,
        message3: adminSettings.message3
      };
      console.log('TEMP SETTINGS:', tempSettings);
      try {
        const res = await axios.put(`${baseURL}/updateSettings`, tempSettings);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    }
  };
  const handleInputChange = (event) => {
    setAdminSettings((previous) => ({ ...previous, [event.target.id]: event.target.value }));
    setSaveButton(false);
  };
  const handleDropdownChange = (event) => {
    handleInputChange(event);
    setSaveButton(false);
  };
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
          id="schoolYear"
          onChange={handleInputChange}
          label="Bus Registration Year"
          options={schoolYears}
          value={
            adminSettings.value
              ? schoolYears.filter((obj) => obj.adminYear === adminSettings.value)[0].label
              : ''
          }
        />
      </Row>
      <Row>
        <Dropdown
          id="registrationStatus"
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
            id="message1"
            value={adminSettings.message1}
            onChange={handleInputChange}
          />
        </Row>
        <br />
        <Row>
          <InputComponent
            buttonText="Closed"
            id="message2"
            value={adminSettings.message2}
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
            id="message3"
            onChange={handleInputChange}
            value={adminSettings.message3}
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
