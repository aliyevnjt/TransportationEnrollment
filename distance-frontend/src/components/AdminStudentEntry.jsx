import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import {
  baseURL, enrollmentStatus, locality,
} from '../data/Data';
import Student from './Student';
import ParentBox from './toolbox/ParentBox';
import AddressBox from './toolbox/AddressBox';
import Dropdown from './toolbox/Dropdown';

function AdminStudentEntry() {
  const [inputs, setInputs] = useState({ schoolYear: 'FY22' });
  const [addressInfo, setAddressInfo] = useState({
    city: locality.city,
    state: locality.state,
    zip: locality.zipCode,
  });
  useEffect(() => {
    // inputs state is updated with address info
    setInputs((current) => ({
      ...current, ...addressInfo,
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
  return (
    <div>
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
          parentInfo={parentInfo}
          onChange={handleParentInfoChange}
        />
        <Button as="input" className="mr-1" type="submit" value="Save" />
      </Form>
    </div>
  );
}
export default AdminStudentEntry;
