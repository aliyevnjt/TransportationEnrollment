import React, { useState } from 'react';
import {
  Container, Form, Button, Jumbotron, Col
} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import {
  locality, baseURL
} from '../data/Data';
import Header from './Header';
import Student from './Student';
import AddressBoxStatic from './toolbox/AddressBoxStatic';
import ParentBox from './toolbox/ParentBox';

function RegistrationFormStatic() {
  const adminYear = { adminYear: 'FY22' };
  const [studentData, setStudentData] = useState([adminYear]);
  const [addressInfo, setAddressInfo] = useState({
    city: locality.city,
    state: locality.state,
    zipCode: locality.zipCode
  });
  const [parentInfo, setParentInfo] = useState({});
  const history = useHistory();

  const handleSubmit = async (event) => {
    if (event) {
      event.preventDefault();
      if (event.target.id === 'registrationForm') {
        setStudentData((current) => current.map(
          (student) => ({
            ...student, ...addressInfo, ...parentInfo
          })
        ));
        try {
          console.log(studentData);
          const res = await axios.get(`${baseURL}/student/`, studentData);
          console.log(res);
          if (res.data.enrollmentStatus === 'free') {
            studentData({
              pathname: '/freeReg',
              search: '',
              state: { detail: res.data },
              student: res.data
            });
          } else {
            history({
              pathname: '/payment',
              search: '',
              state: { detail: res.data },
              student: res.data
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
    const allStudents = [...studentData];
    const tempStudent = {
      ...studentData[eventCounter],
      [event.target.id]: event.target.value
    };
    allStudents[eventCounter] = tempStudent;

    setStudentData(() => allStudents);
  };
  const addSibling = () => {
    setStudentData((previous) => [...previous, adminYear]);
  };
  const handleAddressInfoChange = (event) => {
    setAddressInfo((previous) => ({ ...previous, [event.target.id]: event.target.value }));
  };
  const handleParentInfoChange = (event) => {
    setParentInfo((previous) => ({ ...previous, [event.target.id]: event.target.value }));
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
            <AddressBoxStatic
              addressInfo={addressInfo}
              onChange={handleAddressInfoChange}
            />
            <ParentBox
              parentInfo={parentInfo}
              onChange={handleParentInfoChange}
            />
            {
              studentData.slice(1).map((student, index) => (
                <Student
                  key="Student"
                  counter={index + 1}
                  studentData={student}
                  onChange={handleInputChange}
                />
              ))
            }
            <Form.Row className="justify-content-md-center">
              <Col>
                <Button disabled={studentData.length > 4} as="input" value="Add Sibling" onClick={addSibling} />
              </Col>
              <Col>&nbsp;</Col>
              <Col>
                <Button as="input" value="Continue" type="submit" />
              </Col>
            </Form.Row>

          </Form>
          {/* <button onClick={this.freeSample}>Free Sample</button> */}
          {/* <button onClick={this.paidSample}>Paid Sample</button> */}
        </Jumbotron>
      </Container>
    </div>
  );
}

export default RegistrationFormStatic;
