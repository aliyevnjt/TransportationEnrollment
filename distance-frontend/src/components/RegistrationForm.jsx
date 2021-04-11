import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import {
  Container, Form, Button, Jumbotron, Col, Row,
} from 'react-bootstrap';
import { baseURL, locality } from '../data/Data';
import Header from './Header';
import Student from './Student';
import ParentBox from './toolbox/ParentBox';
import AddressBox from './toolbox/AddressBox';
import { bigSample } from '../data/BigSample';
// import { v4 as uuidv4 } from 'uuid';

function RegistrationForm() {
  const [studentData, setStudentData] = useState([{ schoolYear: 'FY22' }]);
  const [addressInfo, setAddressInfo] = useState({
    city: locality.city,
    state: locality.state,
    zip: locality.zipCode,
  });
  const [parentInfo, setParentInfo] = useState({});
  const history = useHistory();
  useEffect(() => {
    // studentData state is updated with address info
    setStudentData((current) => current.map(
      (student) => ({
        ...student, ...addressInfo, ...parentInfo,
      }),
    ));
  }, [addressInfo, parentInfo]);

  // logs free sample data for easy entry
  const showFreeSample = () => {
    const st = bigSample.filter((s) => s.enrollmentStatus === 'free');
    const index = parseInt(Math.random() * st.length);
    console.log(st[index]);
  };
  // logs paid sample data for easy entry
  const showPaidSample = () => {
    const st = bigSample.filter((s) => s.enrollmentStatus === 'paid');
    const index = parseInt(Math.random() * st.length);
    console.log(st[index]);
  };
  const handleSubmit = async (event) => {
    if (event) {
      event.preventDefault();
      if (event.target.id === 'registrationForm') {
        try {
          console.log('StudentData:', studentData);
          const res = await axios.post(`${baseURL}/calculateFile/`, studentData);

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
    // console.log('eventCounter:', eventCounter);
    const allStudents = [...studentData];
    const tempStudent = {
      ...studentData[eventCounter],
      [event.target.id]: event.target.value,
    };
    allStudents[eventCounter] = tempStudent;

    setStudentData(() => allStudents);
  };
  const addSibling = () => {
    setStudentData((previous) => [...previous, { schoolYear: 'FY22', ...addressInfo, ...parentInfo }]);
  };
  const handleAddressInfoChange = (address) => {
    // console.log(address);
    setAddressInfo((previous) => ({ ...previous, address }));
  };
  const handleParentInfoChange = (event) => {
    setParentInfo((previous) => ({ ...previous, [event.target.id]: event.target.value }));
  };

  console.log('StudentData2:', studentData);
  console.log('addressInfo:', addressInfo);
  console.log('parentInfo:', parentInfo);
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
            <Form.Row className="justify-content-md-center">
              <Col>
                <Button disabled={studentData.length > 4} as="input" value="Add Sibling" type="button" onClick={addSibling} />
              </Col>
              <Col>&nbsp;</Col>
              <Col>
                <Button as="input" value="Continue" type="submit" />
              </Col>
            </Form.Row>
          </Form>
          <Row className="mt-5">
            <Col>
              <Button as="input" value="Show Free Sample" type="button" onClick={showFreeSample} />
            </Col>
            <Col>
              <Button as="input" value="Show Paid Sample" type="button" onClick={showPaidSample} />
            </Col>
          </Row>
          {/* <button onClick={this.freeSample}>Free Sample</button> */}
          {/* <button onClick={this.paidSample}>Paid Sample</button> */}
        </Jumbotron>
      </Container>
    </div>
  );
}

export default RegistrationForm;
