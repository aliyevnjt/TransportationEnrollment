import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import {
  Container, Form, Button, Jumbotron,
} from 'react-bootstrap';
import { baseURL, locality } from '../data/Data';
import Header from './Header';
import FormGroup from './toolbox/FormGroup';
import Student from './Student';

function RegistrationForm() {
  const [studentData, setStudentData] = useState([{ schoolYear: 'FY22' }]);
  const history = useHistory();

  const handleSubmit = async (event) => {
    if (event) {
      event.preventDefault();
      console.log(studentData);
      // TODO add commonInfo info for siblings in studentData
      if (event.target.id === 'registrationForm') {
        try {
          console.log(studentData);
          const res = await axios.post(`${baseURL}/student/`, studentData);
          console.log(res);
          if (res.data.enrollmentStatus === 'free') {
            studentData({
              pathname: '/freeReg',
              search: '',
              state: { detail: res.data },
              student: res.data,
            });
          } else {
            history({
              pathname: '/payment',
              search: '',
              state: { detail: res.data },
              student: res.data,
            });
          }
        } catch (err) {
          console.log(err);
        }
      }
    }
  };

  const handleInputChange = (event) => {
    const eventCounter = parseInt(event.target.parentElement.parentElement.getAttribute('counter'));
    console.log('eventCounter:', eventCounter);
    // console.log('studentData:', studentData);
    // setTempStudent((student) => ({ ...student, [event.target.id]: event.target.value }));
    const allStudents = [...studentData];
    const tempStudent = { ...studentData[eventCounter] };
    tempStudent[event.target.id] = event.target.value;
    allStudents[eventCounter] = tempStudent;

    setStudentData(() => allStudents);
  };
  const addSibling = () => {
    setStudentData((previous) => [...previous, { schoolYear: 'FY22' }]);
  };

  console.log('StudentData:', studentData);
  return (
    <div>
      <Header />
      <Container className="pt-3">
        <Jumbotron>
          <Form id="registrationForm" onSubmit={handleSubmit}>
            <Student
              counter={0}
              studentData={studentData[0]}
              onChange={handleInputChange}
            />
            <Form.Row counter={0}>
              <FormGroup
                id="address"
                type="text"
                value={studentData[0].address}
                onChange={handleInputChange}
                label="* Address"
                placeholder="1234 Main St"
                required
              />
              <FormGroup
                id="city"
                value={locality.city}
                label="City"
                placeholder={locality.city}
                disabled="true"
              />
              <FormGroup
                id="state"
                value={locality.state}
                label="State"
                placeholder={locality.state}
                disabled="true"
              />
              <FormGroup
                id="zip"
                type="text"
                value={locality.zipCode}
                label="Zip"
                placeholder={locality.zipCode}
                disabled="true"
              />
            </Form.Row>

            <Form.Row counter={0}>
              <FormGroup
                id="parentName"
                type="text"
                value={studentData[0].parentName}
                onChange={handleInputChange}
                label="* Parent Full Name"
                required
              />
              <FormGroup
                id="parentEmailAddress"
                type="email"
                value={studentData[0].parentEmailAddress}
                onChange={handleInputChange}
                label="* Parent Email"
                required
              />
              <FormGroup
                id="parentPhoneNumber"
                type="tel"
                value={studentData[0].parentPhoneNumber}
                onChange={handleInputChange}
                label="* Parent Phone"
                required
              />
            </Form.Row>
            {
              studentData.slice(1).map((student, index) => (
                <Student
                  counter={index + 1}
                  studentData={student}
                  onChange={handleInputChange}
                />
              ))
                 }
            <Form.Row>
              <Button as="input" value="Add Sibling" onClick={addSibling} />
            </Form.Row>

            <Button as="input" value="Continue" type="submit" />
          </Form>
          {/* <button onClick={this.freeSample}>Free Sample</button> */}
          {/* <button onClick={this.paidSample}>Paid Sample</button> */}
        </Jumbotron>
      </Container>
    </div>
  );
}

export default RegistrationForm;
