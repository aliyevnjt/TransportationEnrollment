import React, { useState, useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min';
import Button from './toolbox/Button';
import InputBox from './toolbox/InputBox';
import useAdminInput from './useAdminInput';
import DropDown from './toolbox/DropDown';
import {
  states, cities, schools, grades,
} from '../data/Data';

function RegistrationForm() {
  const { inputs, setInputs, handleInputChange, handleSubmit } = useAdminInput();

  const [gradeOptions, setGradeOptions] = useState(grades);
  //const schoolYear="FY22";

  useEffect(() => {
    M.AutoInit();
    M.updateTextFields();
  });

  const handleSchoolDropdown = (event) => {
    const newGradeOptions = grades.filter((g) => g.level === event.target.value);
    setGradeOptions(newGradeOptions);
    handleInputChange(event);
  };

  return (
    <div>
      <div className="divider" />
      <div className="container">
        <form id="registrationForm" className="col s12" onSubmit={handleSubmit}>
          <div className="row">
            <InputBox
              id="fname"
              type="text"
              value={inputs.fname}
              onChange={handleInputChange}
              label="* First Name"
              col="s4"
              required
            />
            <InputBox
              id="mName"
              type="text"
              value={inputs.mName}
              onChange={handleInputChange}
              label="Middle Name"
              col="s1"
            />
            <InputBox
              id="lname"
              type="text"
              value={inputs.lname}
              onChange={handleInputChange}
              label="* Last Name"
              col="s4"
              required
            />
            <InputBox
              id="birthDate"
              type="text"
              value={inputs.birthDate}
              onChange={handleInputChange}
              label="* Date of Birth (mm/dd/yyyy)"
              col="s3"
              required
            />
          </div>
          <div className="row">
            <InputBox
              id="address"
              type="text"
              value={inputs.address}
              onChange={handleInputChange}
              label="* Address"
              col="s5"
              required
            />
            <DropDown
              id="city"
              value={inputs.city}
              onChange={handleInputChange}
              label="* City"
              col="s2"
              required
              options={cities}
            />
            <DropDown
              id="state"
              value={inputs.state}
              onChange={handleInputChange}
              label="* State"
              col="s3"
              required
              options={states}
            />
            <InputBox
              id="zip"
              type="text"
              value={inputs.zip}
              onChange={handleInputChange}
              label="* Zip"
              col="s2"
              required
              showLabel
            />
          </div>
          <div className="row">
            <DropDown
              id="school"
              value={inputs.school}
              onChange={handleSchoolDropdown}
              label="* School"
              col="s5"
              required
              options={schools}
            />
            <DropDown
              id="grade"
              value={inputs.grade}
              onChange={handleInputChange}
              label="* Grade"
              col="s2"
              required
              options={gradeOptions}
            />
          </div>
          <div className="row">
            <InputBox
              id="parentName"
              type="text"
              value={inputs.parentName}
              onChange={handleInputChange}
              label="* Parent Full Name"
              col="s4"
              required
            />
            <InputBox
              id="parentEmailAddress"
              type="email"
              value={inputs.parentEmailAddress}
              onChange={handleInputChange}
              label="* Parent Email"
              col="s4"
              required
            />
            <InputBox
              id="parentPhoneNumber"
              type="tel"
              value={inputs.parentPhoneNumber}
              onChange={handleInputChange}
              label="* Parent Phone"
              col="s4"
              required
            />
          </div>
          <Button label="Continue" type="submit" />
        </form>
        {/* <button onClick={this.freeSample}>Free Sample</button> */}
        {/* <button onClick={this.paidSample}>Paid Sample</button> */}
        <div />
      </div>
    </div>
  );
}

export default RegistrationForm;
