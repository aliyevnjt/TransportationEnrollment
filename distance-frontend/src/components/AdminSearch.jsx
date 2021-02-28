import React, { useState, useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min';
import InputBox from './toolbox/InputBox';
import DropDown from './toolbox/DropDown';
import useAdminInput from './useAdminInput';
import {
  cities, grades, schools, states,
} from '../data/Data';
import Button from './toolbox/Button';

function AdminSearch() {
  const { inputs, handleInputChange, handleSubmit } = useAdminInput();
  const [gradeOptions, setGradeOptions] = useState(grades);
  useEffect(() => {
    M.AutoInit();
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
        <form className="col s12" onSubmit={handleSubmit}>
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
              col="s4"
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
              options={states}
              required
            />
            <InputBox
              id="lname"
              type="text"
              value={inputs.zip}
              onChange={handleInputChange}
              label="* Zip"
              col="s2"
              required
              showLabel
              disabled
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
          <Button label="Search" type="submit" />
        </form>
        <div />
      </div>
    </div>
  );
}

export default AdminSearch;
