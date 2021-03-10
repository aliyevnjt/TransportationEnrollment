import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import useAdminInput from './useAdminInput';
import {
  cities, grades, schools, states,
} from '../data/Data';
import FormGroup from './toolbox/FormGroup';
import Dropdown from './toolbox/Dropdown';
import constructAdminTable from './toolbox/ConstructAdminTable';
import { sample } from '../data/sample';

function Demo() {
  const {
    inputs, handleInputChange, handleSubmit,
  } = useAdminInput();
  const [gradeOptions, setGradeOptions] = useState(grades);

  const handleSchoolDropdown = (event) => {
    const newGradeOptions = grades.filter((g) => g.level === event.target.value);
    setGradeOptions(newGradeOptions);
    handleInputChange(event);
  };
  return (
    <div>
      <Form id="demoForm" onSubmit={handleSubmit}>
        <Form.Row>
          <FormGroup
            id="firstName"
            onChange={handleInputChange}
            value={inputs.firstName}
            label="First Name"
            type="text"
            placeholder="enter first name"
          />
          <FormGroup
            id="middleName"
            onChange={handleInputChange}
            value={inputs.middleName}
            label="Middle Name"
            type="text"
            placeholder="enter middle name"
          />
          <FormGroup
            id="lastName"
            onChange={handleInputChange}
            value={inputs.lastName}
            label="Last Name"
            type="text"
            placeholder="enter last name"
          />
        </Form.Row>

        <Form.Row>
          <FormGroup
            id="address"
            onChange={handleInputChange}
            value={inputs.address}
            label="First Name"
            type="text"
            placeholder="1234 Main St"
          />
          <Dropdown
            id="city"
            onChange={handleInputChange}
            value={inputs.city}
            label="City"
            options={cities}
          />
          <Dropdown
            id="state"
            onChange={handleInputChange}
            value={inputs.state}
            label="State"
            options={states}
          />
          <FormGroup
            id="zip"
            onChange={handleInputChange}
            value={inputs.zip}
            label="Zip"
            placeholder="enter zip code"
          />
        </Form.Row>

        <Form.Row>
          <Dropdown
            id="school"
            onChange={handleSchoolDropdown}
            value={inputs.school}
            label="* School"
            options={schools}
          />
          <Dropdown
            id="grade"
            onChange={handleInputChange}
            value={inputs.grade}
            label="* Grade"
            options={gradeOptions}
          />
        </Form.Row>
        <Button as="input" type="submit" value="Submit" />
      </Form>
      <br />
      {constructAdminTable(sample)}
    </div>
  );
}

export default Demo;
