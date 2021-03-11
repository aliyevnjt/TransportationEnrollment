import React, { useState, useRef } from 'react';
import {
  Button, InputGroup,
} from 'react-bootstrap';
import InputComponent from './toolbox/InputComponent';
import { schoolYears } from '../data/Data';
import Dropdown from './toolbox/Dropdown';
import useAdminInput from './useAdminInput';

function AdminSettings() {
  const { inputs, handleInputChange, handleSubmit } = useAdminInput();
  const btnRef = useRef();
  // TODO work in progress
  const onBtnClick = (e) => {
    if (btnRef.current) {
      btnRef.current.setAttribute('disabled', 'disabled');
    }
  };
  const handleChange = (event) => {

  };
  const [message, setMessage] = useState('');
  const [earlyReg, setEarlyReg] = useState('');
  const [lateReg, setLateReg] = useState('');
  return (
    <div>

      {/* TODO  */}

      <div className="row">
        <Dropdown
          id="schoolYear"
          value={inputs.schoolYear}
          onChange={handleInputChange}
          label="Bus Registration Year"
          options={schoolYears}
        />
      </div>

      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Radio
            id="message"
            value={message}
            aria-label="Checkbox for following text input"
          />
        </InputGroup.Prepend>
        {/* <FormControl aria-label="Text input with checkbox" /> */}
        <InputComponent
          size="s"
          id="Open"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Radio
            id="message"
            value={message}
            aria-label="Checkbox for following text input"
          />
        </InputGroup.Prepend>
        {/* <FormControl aria-label="Text input with checkbox" /> */}
        <InputComponent
          size="s"
          id="Closed"
        />
      </InputGroup>
      <br />

      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Checkbox
            id="message"
            value={message}
            aria-label="Checkbox for following text input"
          />
        </InputGroup.Prepend>
        {/* <FormControl aria-label="Text input with checkbox" /> */}
        <InputComponent
          size="s"
          id="message"
        />
      </InputGroup>
      <br />
      <Button as="input" ref={btnRef} onClick={onBtnClick} value="Save" type="submit" disabled="true" />
    </div>
  );
}

export default AdminSettings;
