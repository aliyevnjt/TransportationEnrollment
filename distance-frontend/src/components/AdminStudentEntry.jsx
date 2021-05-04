import React, { useEffect, useState } from 'react';
import {Button, Form, Row} from 'react-bootstrap';
import axios from 'axios';
import {
  baseURL, enrollmentStatus, locality
} from '../data/Data';
import Student from './Student';
import ParentBox from './toolbox/ParentBox';
import AddressBox from './toolbox/AddressBox';
import Dropdown from './toolbox/Dropdown';

function AdminStudentEntry() {
  // FIXME adminYear must be fetched from settings. Find a way to share the state.
  const [inputs, setInputs] = useState({ adminYear: '2021'});
  const [addressInfo, setAddressInfo] = useState({
    city: locality.city,
    state: locality.state,
    zip: locality.zipCode
  });
  const [ errors, setErrors ] = useState({});
  const findFormErrors = () => {
    const { fname, lname, birthDate, school, grade, address, enrollmentStatus,
      parentName, parentEmailAddress, parentPhoneNumber} = inputs;
    const newErrors = {};
    // name errors
    if (!fname || fname === '') {
      newErrors.fname = 'cannot be blank!';
    } else if (fname.length > 30) {
      newErrors.fname = 'name is too long!';
    }
    // name errors
    if (!lname || lname === '') {
      newErrors.lname = 'cannot be blank!';
    } else if (lname.length > 30) {
      newErrors.lname = 'name is too long!';
    }
    // food errors
    if (!food || food === '') {
      newErrors.food = 'select a food!';
    }
    // rating errors
    if (!rating || rating > 5 || rating < 1) {
      newErrors.rating = 'must assign a rating between 1 and 5!';
    }
    // comment errors
    if (!comment || comment === '') {
      newErrors.comment = 'cannot be blank!';
    } else if (comment.length > 100) {
      newErrors.comment = 'comment is too long!';
    }

    return newErrors;
  };
  useEffect(() => {
    // inputs state is updated with address info
    setInputs((current) => ({
      ...current, ...addressInfo
    }));
  }, [addressInfo]);
  const handleSubmit = async (event) => {
    if (event) {
      event.preventDefault();
      // FIXME following fields are mandatory for this method
      // this method does not require "enrollment status"
      if (event.target.id === 'adminStudentEntry') {
        try {
          console.log(inputs);
          const res = await axios.post(`${baseURL}/submit`, inputs);
          // res.status === 202
          console.log(res);
        } catch (err) {
          console.log(err);
        }
      }
    }
  };
  const handleInputChange = (event) => {
    console.log('EVENT input:', event);
    setInputs((previous) => ({ ...previous, [event.target.id]: event.target.value }));
  };
  const handleAddressInfoChange = (address) => {
    setAddressInfo((previous) => ({ ...previous, address }));
    console.log(address);
  };
  // TODO save button should be disabled until all fields are entered
  return (
    <div>
      <Row className="mt-5 alert-danger">
        <b>All fields are required!</b>
      </Row>
      <br />
      <Row>
        <Form id="adminStudentEntry" onSubmit={handleSubmit}>
          <Student
            counter={0}
            onChange={handleInputChange}
          />
          <Dropdown
            id="enrollmentStatus"
            onChange={handleInputChange}
            label="Enrollment Status"
            options={enrollmentStatus}
            value=""
          />
          <AddressBox
            addressInfo={addressInfo}
            onChange={handleAddressInfoChange}
          />
          <ParentBox
            parentInfo={inputs}
            onChange={handleInputChange}
          />
          <Button as="input" className="mr-1" type="submit" value="Save" />
        </Form>
      </Row>
    </div>
  );
}
export default AdminStudentEntry;
