import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Dropdown from './toolbox/Dropdown';
import { schools, grades } from '../data/Data';
import FormGroup from './toolbox/FormGroup';

const Student = (props) => {
  const { counter, onChange } = props;
  const [gradeOptions, setGradeOptions] = useState(grades);

  // FIXME there is a bug when you do back and forth between school and grade dropdowns
  const handleSchoolDropdown = (event) => {
    const newGradeOptions = grades.filter((g) => g.level === event.target.value);
    setGradeOptions(newGradeOptions);
    onChange(event);
  };
  return (
    <div>
      <Form.Row counter={counter}>
        <FormGroup
          id="fname"
          type="text"
          onChange={onChange}
          label="First Name"
          placeholder="enter first name"
        />
        <FormGroup
          id="mName"
          type="text"
          onChange={onChange}
          label="Middle Name (optional)"
          required={false}
        />
        <FormGroup
          id="lname"
          type="text"
          onChange={onChange}
          label="Last Name"
          placeholder="enter last name"
        />
        <FormGroup
          id="birthDate"
          type="text"
          onChange={onChange}
          label="Date of Birth"
          placeholder="mm/dd/yyyy"
        />
      </Form.Row>
      <Form.Row counter={counter}>
        <Dropdown
          id="school"
          onChange={handleSchoolDropdown}
          label="School"
          options={schools}
        />
        <Dropdown
          id="grade"
          onChange={onChange}
          label="Grade"
          options={gradeOptions}
        />
      </Form.Row>
    </div>
  );
};
Student.propTypes = {
  counter: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};
export default Student;
