import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import {
  Container, Form, Button, Jumbotron,
} from 'react-bootstrap';
import { baseURL, locality } from '../data/Data';
import Header from './Header';
import Student from './Student';
import ParentBox from './toolbox/ParentBox';
import AddressBox from './toolbox/AddressBox';

function RegistrationForm() {
  const [studentData, setStudentData] = useState([]);
  const [addressInfo, setAddressInfo] = useState({
    city: locality.city,
    state: locality.state,
    zipCode: locality.zipCode,
  });
  const [parentInfo, setParentInfo] = useState({});
  const history = useHistory();

  const handleSubmit = async (event) => {
    if (event) {
      event.preventDefault();
      console.log(studentData);
      if (event.target.id === 'registrationForm') {
        setStudentData((current) => current.map(
          (student) => ({
            ...student, ...addressInfo, ...parentInfo,
          }),
        ));
        try {
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
    const allStudents = [...studentData];
    const tempStudent = {
      ...studentData[eventCounter],
      [event.target.id]: event.target.value,
    };
    allStudents[eventCounter] = tempStudent;

    setStudentData(() => allStudents);
  };
  const addSibling = () => {
    setStudentData((previous) => [...previous, { schoolYear: 'FY22' }]);
  };
  const handleAddressInfoChange = (address) => {
    console.log(address);
    setAddressInfo((previous) => ({ ...previous, address }));
  };
  const handleParentInfoChange = (event) => {
    setParentInfo((previous) => ({ ...previous, [event.target.id]: event.target.value }));
  };

  console.log('StudentData:', studentData);
  // FIXME must add a unique key for all iterated elements
  return (
    <div>
      <Header />
      <Container className="pt-3">
        <Jumbotron>
          <Form id="registrationForm" onSubmit={handleSubmit}>
            <Student
              counter={0}
              onChange={handleInputChange}
            />
            <AddressBox
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
                  key={student}
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
