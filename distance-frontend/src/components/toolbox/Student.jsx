import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Dropdown from './Dropdown';
import { schools, grades, schoolYear } from '../../data/Data';
import FormGroup from './FormGroup';

const Student = (props) => {
  const { counter, onChange, hasDOB } = props;
  const [gradeOptions, setGradeOptions] = useState(grades);
  const schoolLabel = `School (${schoolYear})`;

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
          label="Student First Name"
          placeholder=""
        />
        <FormGroup
          id="mName"
          type="text"
          onChange={onChange}
          label="Student Middle Name (optional)"
          required={false}
        />
        <FormGroup
          id="lname"
          type="text"
          onChange={onChange}
          label="Student Last Name"
          placeholder=""
        />
        {hasDOB
          ? <FormGroup
            id="birthDate"
            type="text"
            onChange={onChange}
            label="Student Date of Birth"
            placeholder="mm/dd/yyyy"
          />
          : <></>
        }
      </Form.Row>
      <Form.Row counter={counter}>
        <Dropdown
          id="school"
          onChange={handleSchoolDropdown}
          label={schoolLabel}
          defaultVal='School'
          options={schools}
        />
        <Dropdown
          id="grade"
          onChange={onChange}
          label={'Grade (' + schoolYear + ')'}
          defaultVal='Grade'
          options={gradeOptions}
        />
      </Form.Row>
    </div>
  );
};
Student.defaultProps = {
  hasDOB: true
};
Student.propTypes = {
  counter: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  hasDOB: PropTypes.bool
};
export default Student;
