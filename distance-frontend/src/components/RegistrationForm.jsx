import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import {
  Container,
  Form,
  Button,
  Jumbotron,
  Col,
  Row,
  Card,
} from 'react-bootstrap';
import { locality, adminYear } from '../data/Data';
import Header from './Header';
import Student from './toolbox/Student';
import ParentBox from './toolbox/ParentBox';
import AddressBox from './toolbox/AddressBox';
import { bigSample } from '../data/BigSample';
import PropTypes from 'prop-types';
import {getAdminSettings} from './api/api'

function RegistrationForm() {
  // TODO find a way to add adminYear right here. It is undefined in the beginning ???
  const [studentData, setStudentData] = useState([{}]);
  const [addressInfo, setAddressInfo] = useState({
    city: locality.city,
    state: locality.state,
    zip: locality.zipCode,
  });
  const [parentInfo, setParentInfo] = useState({});
  const [validated, setValidated] = useState(false);
  const history = useHistory();
  const baseURL = process.env.REACT_APP_BASE_URL;
  console.log()
  let adminSettings;
  useEffect( async () => {
    await getAdminSettings().then(res=>{
      adminSettings=res;
      // console.log("admin settings",adminSettings)
    })
    // studentData state is updated with address and parent info
    setStudentData((current) =>
      current.map((student) => ({
        ...student,
        ...addressInfo,
        ...parentInfo,
      }))
    );
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

  const redirectToPage = (data) => {
    const free = data.filter((st) => st.enrollmentStatus === 'free');
    const paid = data.filter((st) => st.enrollmentStatus === 'paid');
    if (free.length > 0 && !paid.length > 0) {
      history.push('/freereg', free);
    } else {
      history.push('/paidreg', data);
    }
  };

  const handleSubmit = async (event) => {
    if (event) {
      event.preventDefault();
      const form = event.currentTarget;
      if (form.checkValidity() && event.target.id === 'registrationForm') {
        try {
          // console.log('StudentData:', studentData);
          const res = await axios.post(
            `${baseURL}/pre-enrollment/`,
            studentData
          );
          // console.log('Request completed', res);
          redirectToPage(res.data);
        } catch (err) {
          console.log(err);
          const message =
            'Please check all fields. If you are still experiencing problems registering, ' +
            'please contact school business office.';
          alert(message)
        }
      }
      setValidated(true);
    }
  };

  const handleInputChange = (event) => {
    const eventCounter = parseInt(
      event.target.parentElement.parentElement.getAttribute('counter')
    );
    // console.log('eventCounter:', eventCounter);
    // TODO remove if this value can be populated in the beginning
    if (!studentData[0].adminYear) {
      studentData[0].adminYear = adminYear;
    }
    const allStudents = [...studentData];
    const tempStudent = {
      ...studentData[eventCounter],
      [event.target.id]: event.target.value,
    };
    allStudents[eventCounter] = tempStudent;

    setStudentData(() => allStudents);
  };
  const addSibling = () => {
    setStudentData((previous) => [
      ...previous,
      { adminYear: adminYear, ...addressInfo, ...parentInfo },
    ]);
  };
  const handleAddressInfoChange = (address) => {
    // console.log(address);
    setAddressInfo((previous) => ({ ...previous, address }));
  };
  const handleParentInfoChange = (event) => {
    setParentInfo((previous) => ({
      ...previous,
      [event.target.id]: event.target.value,
    }));
  };

  // console.log('StudentData2:', studentData);
  // console.log('addressInfo:', addressInfo);
  // console.log('parentInfo:', parentInfo);
  // FIXME must add a unique key for all iterated elements
  // TODO save button should be disabled until all fields are entered
  return (
    <div>
      <Header adminYear={adminYear} />
      <Container className="pt-3">
        <Jumbotron>
          <Form
            noValidate
            validated={validated}
            id="registrationForm"
            onSubmit={handleSubmit}>
            <Student counter={0} onChange={handleInputChange} />
            <AddressBox
              addressInfo={addressInfo}
              onChange={handleAddressInfoChange}
            />
            <ParentBox
              parentInfo={parentInfo}
              onChange={handleParentInfoChange}
            />
            {studentData.slice(1).map((student, index) => (
              // <Card className="bg-light">
              //   <Card.Header>Sibling {index + 1} </Card.Header>
              //   <Card.Body>
              <Student
                key={student}
                counter={index + 1}
                studentData={student}
                onChange={handleInputChange}
              />
              //   </Card.Body>
              // </Card>
            ))}
            <Form.Row className="justify-content-md-center">
              <Col>
                <Button
                  disabled={studentData.length > 5}
                  as="input"
                  value="Add Sibling"
                  type="button"
                  onClick={addSibling}
                />
              </Col>
              <Col>&nbsp;</Col>
              <Col>
                <Button as="input" value="Continue" type="submit" />
              </Col>
            </Form.Row>
          </Form>
          {process.env.NODE_ENV === 'development' ? (
            <Row className="mt-5 alert-danger">
              <b>DEVELOPMENT MODE</b>
              <Col>
                <Button
                  as="input"
                  value="Show Free Sample"
                  type="button"
                  onClick={showFreeSample}
                />
              </Col>
              <Col>
                <Button
                  as="input"
                  value="Show Paid Sample"
                  type="button"
                  onClick={showPaidSample}
                />
              </Col>
            </Row>
          ) : (
            ''
          )}
        </Jumbotron>
      </Container>
    </div>
  );
}
RegistrationForm.propTypes = {
  adminYear: PropTypes.string,
};
export default RegistrationForm;
