import React, { useState } from 'react';
import {
  Button, FormControl, InputGroup, Row,
} from 'react-bootstrap';
import InputComponent from './toolbox/InputComponent';
import { schoolYears, registration } from '../data/Data';
import Dropdown from './toolbox/Dropdown';
import useAdminInput from './useAdminInput';

function AdminSettings() {
  // Bonus: reset to default(saved version from DB)
  // handle click, only one at a time
  // handle save --> post to DB
  // initial state from DB
  // Different defaults for each year
  //

  const { inputs, handleInputChange, handleSubmit } = useAdminInput();
  const [message, setMessage] = useState({
    open: 'earlyReg',
    closed: 'lateReg',
    notification: 'notification',
  });
  const [saveButton, setSaveButton] = useState(true);
  const [checkButtonStatus, setCheckButtonStatus] = useState(false);

  const handleMessageChange = (event) => {
    setMessage(() => ({ ...message, [event.target.id]: event.target.value }));
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
    // TODO AXIOS POST in handleSubmit
    // Comparison to previous state before saving
    // Post messages and status of the clicks and year
    console.log(event);
    console.log('===========');
    console.log(message);
    handleSubmit(event);
    setSaveButton(true);
  };
  return (
    <>
      <Row>
        <Dropdown
          id="schoolYear"
          value={inputs.schoolYear}
          onChange={handleInputChange}
          label="Bus Registration Year"
          options={schoolYears}
        />
      </Row>
      <Row>
        <Dropdown
          id="registrationStatus"
          value={inputs.registration}
          onChange={handleDropdownChange}
          label="Registration Status"
          options={registration}
        />
      </Row>
      <div>
        <Row>
          <InputComponent
            buttonText="Open"
            id="open"
            value={message.open}
            onChange={handleMessageChange}
          />
        </Row>
        <br />
        <Row>
          <InputComponent
            buttonText="Closed"
            id="closed"
            value={message.closed}
            onChange={handleMessageChange}
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
            id="notification"
            onChange={handleMessageChange}
            value={message.notification}
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
