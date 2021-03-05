import React, { useState } from 'react';
import {
  Container, Form, Col, Row, Image, Button, Jumbotron,
} from 'react-bootstrap';
import useAdminInput from './useAdminInput';
import Dropdown from './toolbox/Dropdown';
import {
  states, cities, schools, grades,
} from '../data/Data';
import Header from './Header';
import FormGroup from './toolbox/FormGroup';

function RegistrationForm() {
  const {
    inputs, setInputs, handleInputChange, handleSubmit,
  } = useAdminInput();

  const [gradeOptions, setGradeOptions] = useState(grades);
  // const schoolYear="FY22";

  const handleSchoolDropdown = (event) => {
    const newGradeOptions = grades.filter((g) => g.level === event.target.value);
    setGradeOptions(newGradeOptions);
    handleInputChange(event);
  };

  return (
    <div>
      <Header />
      <Container className="pt-3">
        <Jumbotron>
          <Form id="registrationForm" onSubmit={handleSubmit}>
            <Form.Row>
              <FormGroup
                id="fname"
                type="text"
                value={inputs.fname}
                onChange={handleInputChange}
                label="* First Name"
                placeholder="enter first name"
                required
              />
              <FormGroup
                id="mName"
                type="text"
                value={inputs.mName}
                onChange={handleInputChange}
                label="Middle Name"
              />
              <FormGroup
                id="lname"
                type="text"
                value={inputs.lname}
                onChange={handleInputChange}
                label="* Last Name"
                placeholder="enter last name"
                required
              />
              <FormGroup
                id="birthDate"
                type="text"
                value={inputs.birthDate}
                onChange={handleInputChange}
                label="* Date of Birth"
                placeholder="mm/dd/yyyy"
                required
              />
            </Form.Row>

            <Form.Row>
              <FormGroup
                id="address"
                type="text"
                value={inputs.address}
                onChange={handleInputChange}
                label="* Address"
                placeholder="1234 Main St"
                required
              />
              <Dropdown
                id="city"
                value={inputs.city}
                onChange={handleInputChange}
                label="* City"
                required
                options={cities}
              />
              <Dropdown
                id="state"
                value={inputs.state}
                onChange={handleInputChange}
                label="* State"
                required
                options={states}
              />
              <FormGroup
                id="zip"
                type="text"
                value={inputs.zip}
                onChange={handleInputChange}
                label="* Zip"
                placeholder="enter zip code"
                required
                showLabel
              />
            </Form.Row>

            <Form.Row>
              <Dropdown
                id="school"
                value={inputs.school}
                onChange={handleSchoolDropdown}
                label="* School"
                required
                options={schools}
              />
              <Dropdown
                id="grade"
                value={inputs.grade}
                onChange={handleInputChange}
                label="* Grade"
                required
                options={gradeOptions}
              />
            </Form.Row>

            <Form.Row>
              <FormGroup
                id="parentName"
                type="text"
                value={inputs.parentName}
                onChange={handleInputChange}
                label="* Parent Full Name"
                required
              />
              <FormGroup
                id="parentEmailAddress"
                type="email"
                value={inputs.parentEmailAddress}
                onChange={handleInputChange}
                label="* Parent Email"
                required
              />
              <FormGroup
                id="parentPhoneNumber"
                type="tel"
                value={inputs.parentPhoneNumber}
                onChange={handleInputChange}
                label="* Parent Phone"
                required
              />
            </Form.Row>
            <Button as="input" value="Continue" type="submit" />
          </Form>
          {/* <button onClick={this.freeSample}>Free Sample</button> */}
          {/* <button onClick={this.paidSample}>Paid Sample</button> */}
        </Jumbotron>
      </Container>
    </div>
  );
}

export default RegistrationForm;
