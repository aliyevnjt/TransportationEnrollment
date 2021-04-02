import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { baseURL, importURL, locality } from '../data/Data';
import Student from './Student';
import AddressBox from './toolbox/AddressBox';

function AdminStudentEntry() {
  const [inputs, setInputs] = useState({
    city: locality.city,
    state: locality.state,
    zipCode: locality.zipCode,
  });
  const handleSubmit = async (event) => {
    if (event) {
      event.preventDefault();
      if (event.target.id === 'adminStudentEntry') {
        try {
          const res = await axios.post(`${baseURL}/submit/`, inputs);
          console.log(res);
        } catch (err) {
          console.log(err);
        }
      }
    }
  };
  const handleInputChange = (event) => {
    setInputs((previous) => ({ ...previous, [event.target.id]: event.target.value }));
  };
  return (
    <div>
      <Form id="adminStudentEntry" onSubmit={handleSubmit}>
        <Student
          counter={0}
          onChange={handleInputChange}
        />
        <AddressBox
          addressInfo={inputs}
          onChange={handleInputChange}
        />
        <Button as="input" className="mr-1" type="submit" value="Save" />
      </Form>
    </div>
  );
}
export default AdminStudentEntry;
