import React, { useState } from 'react';
import {
  Button, InputGroup, Col, Row, Form,
} from 'react-bootstrap';
import InputComponent from './toolbox/InputComponent';
import { schoolYears } from '../data/Data';
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
    earlyReg: { value: 'earlyReg', status: false },
    lateReg: { value: 'lateReg', status: false },
    notification: { value: 'notification', status: false },
  });
  const [saveButton, setSaveButton] = useState(true);

  const handleMessageChange = (event) => {
    setMessage(() => ({ ...message, [event.target.id]: { value: event.target.value } }));
    setSaveButton(false);
  };
  const handleClick = (event) => {
    console.log(event);
    if (event.target.value === 'on') {
      setMessage(() => ({ ...message, [event.target.name]: { status: true } }));
    }
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
      <InputGroup className="mb-3">
        <Row>
          <InputGroup.Prepend>
            <InputGroup.Radio
              name="earlyReg"
              aria-label="Checkbox for following text input"
              onClick={handleClick}
            />
            <InputComponent
              size="s"
              buttonText="Open"
              id="earlyReg"
              value={message.earlyReg.value}
              onChange={handleMessageChange}
            />
          </InputGroup.Prepend>
        </Row>
        <br />
        <Row>
          <InputGroup.Prepend>
            <InputGroup.Radio
              name="lateReg"
              aria-label="Checkbox for following text input"
              onClick={handleClick}
            />
            <InputComponent
              size="s"
              buttonText="Closed"
              id="lateReg"
              value={message.lateReg.value}
              onChange={handleMessageChange}
            />
          </InputGroup.Prepend>
        </Row>
      </InputGroup>
      <br />
      <InputGroup className="mb-3">
        <Row>
          <InputGroup.Prepend>
            <InputGroup.Checkbox
              name="notification"
              aria-label="Checkbox for following text input"
              onClick={handleClick}
            />
            <InputComponent
              size="s"
              buttonText="Notification"
              id="notification"
              onChange={handleMessageChange}
              value={message.notification.value}
            />
          </InputGroup.Prepend>
        </Row>
      </InputGroup>
      <Button
        disabled={saveButton}
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
