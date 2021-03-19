import React, { useState } from 'react';
import {
  Container, Form, Button, Jumbotron,
} from 'react-bootstrap';
import useAdminInput from './useAdminInput';
import Dropdown from './toolbox/Dropdown';
import {
  states, cities, schools, grades,
} from '../data/Data';
import FormGroup from './toolbox/FormGroup';

const Student = (props)=> {
  const {
    inputs, handleInputChange,
  } = useAdminInput();

  const [gradeOptions, setGradeOptions] = useState(grades);

  const handleSchoolDropdown = (event) => {
    const newGradeOptions = grades.filter((g) => g.level === event.target.value);
    setGradeOptions(newGradeOptions);
    handleInputChange(event);
    console.log(props)
  };

  return (
    <div id={props.id}>

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
    </div>
  )
}

export default Student;


