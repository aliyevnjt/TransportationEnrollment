import React, { useEffect, useState, useRef } from 'react';
import M from 'materialize-css/dist/js/materialize.min';
import TextField from './toolbox/TextField';
import Button from './toolbox/Button';
import { schoolYears } from '../data/Data';
import DropDown from './toolbox/DropDown';
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
  useEffect(() => {
    M.AutoInit();
  });
  const handleChange = (event) => {

  };
  const [message, setMessage] = useState('');
  const [earlyReg, setEarlyReg] = useState('');
  const [lateReg, setLateReg] = useState('');
  return (
    <div>

      {/* TODO  */}

      <div className="row">
        <DropDown
          id="schoolYear"
          value={inputs.schoolYear}
          onChange={handleInputChange}
          label="Bus Registration Year"
          col="s3"
          options={schoolYears}
        />
      </div>
      AdminSettings
      <TextField id="message" value={message} onChange={handleChange} />

      <TextField id="earlyReg" value={earlyReg} onChange={handleChange} />

      <TextField id="lateReg" value={lateReg} onChange={handleChange} />

      <Button ref={btnRef} onClick={onBtnClick} label="Save" type="submit" disabled="true" />
    </div>
  );
}

export default AdminSettings;
