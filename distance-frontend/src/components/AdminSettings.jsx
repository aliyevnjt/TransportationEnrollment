import React, { useState, useRef } from 'react';
import { Button } from 'react-bootstrap';
import TextField from './toolbox/TextField';
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
      AdminSettings
      <TextField id="message" value={message} onChange={handleChange} />

      <TextField id="earlyReg" value={earlyReg} onChange={handleChange} />

      <TextField id="lateReg" value={lateReg} onChange={handleChange} />
      <br />
      <InputComponent
        size="lg"
        id="message"
      />
      <br />
      <Button as="input" ref={btnRef} onClick={onBtnClick} value="Save" type="submit" disabled="true" />
    </div>
  );
}

export default AdminSettings;
