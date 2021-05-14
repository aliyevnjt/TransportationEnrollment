import React, { useEffect, useState } from 'react';
import {Button, Form, Row, Card, Col} from 'react-bootstrap';
import axios from 'axios';
import { enrollmentStatus, locality, paymentType } from '../data/Data';
import Student from './toolbox/Student';
import ParentBox from './toolbox/ParentBox';
import AddressBox from './toolbox/AddressBox';
import Dropdown from './toolbox/Dropdown';

function AdminStudentEntry() {
  // FIXME adminYear must be fetched from settings. Find a way to share the state.
  const [inputs, setInputs] = useState({ adminYear: '2021', registrationStatus:'REGISTERED'});
  const [paymentDisabled, setPaymentDisabled] = useState(true);
  const [addressInfo, setAddressInfo] = useState({
    city: locality.city,
    state: locality.state,
    zip: locality.zipCode
  });
  const [validated, setValidated] = useState(false);
  const baseURL = process.env.REACT_APP_BASE_URL;

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
            // console.log(inputs);
            const res = await axios.post(`${baseURL}/submit`, inputs);
            // res.status === 202
            // console.log(res);
          } catch (err) {
            console.log(err);
          }
        }
      }
      setValidated(true);
    }
  };
  const handleInputChange = (event) => {
    if (event.target.id === 'enrollmentStatus'){
      event.target.value === "paid" ? setPaymentDisabled(false) : setPaymentDisabled(true)
    } 
    // console.log('EVENT input:', event);
    setInputs((previous) => ({ ...previous, [event.target.id]: event.target.value }));
  };
  const handleAddressInfoChange = (address) => {
    setAddressInfo((previous) => ({ ...previous, address }));
    // console.log(address);
  };
  // TODO save button should be disabled until all fields are entered
  // TODO add paymentType if paid add options ==> Check, Cash, Money Order
  return (
    <div>
      <Row>
        <Form noValidate validated={validated} id="adminStudentEntry" onSubmit={handleSubmit}>
          <Student
            counter={0}
            onChange={handleInputChange}
          />
          <Card>
          <Card.Body className="app-bg-color-grey">
            <Row className="justify-content-md-left">
              <Col lg="5" md="7" sm="8" xs="12">
                <Dropdown
                  id="enrollmentStatus"
                  onChange={handleInputChange}
                  label="Enrollment Status"
                  options={enrollmentStatus}
                  defaultVal="Select Status"
                />
            </Col>
            <Col lg="5" md="7" sm="8" xs="12">
              <Dropdown
                id="paymentType"
                onChange={handleInputChange}
                disabled={paymentDisabled}
                label="Payment Type"
                options={paymentType.filter(type=>type.label !== 'Unibank')}
                defaultVal="Select Payment"
              />
              </Col>
            </Row>
            </Card.Body>
          </Card>
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
