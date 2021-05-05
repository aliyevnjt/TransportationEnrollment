import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Dropdown from './Dropdown';
import { schools, grades } from '../../data/Data';
import FormGroup from './FormGroup';

const Student = (props) => {
  const { counter, onChange } = props;
  const [gradeOptions, setGradeOptions] = useState(grades);

  const handleSchoolDropdown = (event) => {
    const newGradeOptions = grades.filter(
      (g) => g.level === event.target.value
    );
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
          label="Student First Name"
          placeholder=""
          required
        />
        <FormGroup
          id="mName"
          type="text"
          onChange={onChange}
          label="Student Middle Name (Optional)"
        />
        <FormGroup
          id="lname"
          type="text"
          onChange={onChange}
          label="Student Last Name"
          placeholder=""
          required
        />
        <FormGroup
          id="birthDate"
          type="text"
          onChange={onChange}
          label="Student Date of Birth"
          placeholder="mm/dd/yyyy"
          required
        />
      </Form.Row>
      <Form.Row counter={counter}>
        <Dropdown
          id="school"
          onChange={handleSchoolDropdown}
          label="School"
          required
          options={schools}
        />
        <Dropdown
          id="grade"
          onChange={onChange}
          label="* Grade"
          required
          options={gradeOptions}
        />
      </Form.Row>
    </div>
  );
};
Student.propTypes = {
  counter: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Student;
