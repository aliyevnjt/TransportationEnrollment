import React, { useEffect, useState } from 'react';
import {Button, Form, Row} from 'react-bootstrap';
import axios from 'axios';
import {
  baseURL, enrollmentStatus, locality
} from '../data/Data';
import Student from './toolbox/Student';
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
  const [validated, setValidated] = useState(false);

  useEffect(() => {
    // inputs state is updated with address info
    setInputs((current) => ({
      ...current, ...addressInfo
    }));
  }, [addressInfo]);

  const handleSubmit = async (event) => {
    if (event) {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      } else {
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
      setValidated(true);
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
      <Row>
        <Form noValidate validated={validated} id="adminStudentEntry" onSubmit={handleSubmit}>
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
