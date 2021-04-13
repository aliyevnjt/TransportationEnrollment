import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Button, Col, Row } from 'react-bootstrap';
import axios from 'axios';
import Header from './Header';
import ConstructTable from './toolbox/ConstructTable';
import { baseURL } from '../data/Data';

function PaidReg(props) {
  const maxFee = 675;
  let total = 0;
  const history = useHistory();
  const [pageBody, setPageBody] = useState();
  const [studentData, setStudentData] = useState(props.location.state);
  const data = {
    headers: {
      fname: 'First Name',
      lname: 'Last Name',
      grade: 'Grade',
      due: 'Due',
      enrollmentStatus: 'Status',
      distanceFromSchool: 'Distance',
      school: 'School',
    },
    options: studentData,
  };
  if (props.location.state == undefined) {
    history.push('/');
    return <div></div>;
  }

  const calculateFee = (students) => {
    students.forEach((element) => {
      if (element.enrollmentStatus === 'free') {
        element['due'] = 0;
      } else if (element.enrollmentStatus === 'paid') {
        if (total < maxFee) {
          element['due'] = 225;
          total += 225;
        } else element['due'] = 0;
      }
    });
    console.log('total', total);
    return students;
  };
  useEffect(() => {
    const st = calculateFee(studentData);
    console.log('after calc', st);
    setPageBody(
      <div>
        <Container className="pt-3 " fluid="sm">
          {ConstructTable(data)}
        </Container>

        <Container>
          <Row className="justify-content-md-center">
            <Col xs lg="5">
              <p>
                The above listed student/s are eligible for free transportation.
                Please click Register button below to complete the registration.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Button
              as="input"
              value="Complete Registration"
              type="button"
              onClick={register}
            />
          </Row>
        </Container>
      </div>
    );
  }, []);
  console.log(props.location.state);

  const register = async () => {
    try {
      const res = await axios.post(`${baseURL}/submitAll/`, studentData);
      setPageBody(
        <Container>
          <Row className="justify-content-md-center">
            <Col xs lg="5">
              <p>
                Thank you for registering your child/ren for school
                transportation. You will receive information from the school
                regarding you bus and pickup/drop off information.
              </p>
            </Col>
          </Row>
          {/* <Row className="justify-content-md-center">
                        <Button as="input" value="Go to home page" type="button" onClick={history.push('/')}/>
                    </Row> */}
        </Container>
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <Header />
      {pageBody}
    </div>
  );
}

export default PaidReg;
