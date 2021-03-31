import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Dropdown from './toolbox/Dropdown';
import { schools, grades } from '../data/Data';
import FormGroup from './toolbox/FormGroup';

const Student = (props) => {
  const { studentData, counter, onChange } = props;
  const [gradeOptions, setGradeOptions] = useState(grades);

  const handleSchoolDropdown = (event) => {
    const newGradeOptions = grades.filter((g) => g.level === event.target.value);
    setGradeOptions(newGradeOptions);
    onChange(event);
    console.log(props);
  };
  return (
    <div>
      <Form.Row counter={counter}>
        <FormGroup
          id="fname"
          type="text"
          value={studentData}
          onChange={onChange}
          label="* First Name"
          placeholder="enter first name"
          required
        />
        <FormGroup
          id="mName"
          type="text"
          value={studentData}
          onChange={onChange}
          label="Middle Name"
        />
        <FormGroup
          id="lname"
          type="text"
          value={studentData}
          onChange={onChange}
          label="* Last Name"
          placeholder="enter last name"
          required
        />
        <FormGroup
          id="birthDate"
          type="text"
          value={studentData}
          onChange={onChange}
          label="* Date of Birth"
          placeholder="mm/dd/yyyy"
          required
        />
      </Form.Row>
      <Form.Row counter={counter}>
        <Dropdown
          id="school"
          value={studentData}
          onChange={handleSchoolDropdown}
          label="* School"
          required
          options={schools}
        />
        <Dropdown
          id="grade"
          value={studentData}
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
  studentData: PropTypes.instanceOf([]).isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Student;
