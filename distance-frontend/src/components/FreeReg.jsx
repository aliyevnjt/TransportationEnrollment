import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Button, Col, Row } from 'react-bootstrap';
import axios from 'axios';
import PropTypes from 'prop-types';
import Header from './Header';
import constructTable from './toolbox/ConstructTable';
import { adminYear } from '../data/Data';

function FreeReg(props) {
  const baseURL = process.env.REACT_APP_BASE_URL;
  const { location } = props;
  const history = useHistory();
  const [pageBody, setPageBody] = useState();
  console.log(location.state);
  if (location.state === undefined) {
    history.push('/');
    return <div />;
  }
  const studentData = location.state;
  const data = {
    headers: {
      fname: 'First Name',
      lname: 'Last Name',
      grade: 'Grade',
      enrollmentStatus: 'Status',
      distanceFromSchool: 'Distance',
      school: 'School'
    },
    options: studentData
  };
  useEffect(() => {
    setPageBody(
      <div>
        <Container className="pt-3 " fluid="sm">
          {constructTable(data)}
        </Container>

        <Container>
          <Row className="justify-content-md-center">
            <Col className="text-center">
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

  const register = async () => {
    try {
      const res = await axios.put(`${baseURL}/enrollment/`, studentData);
      setPageBody(
        <Container>
          <Row className="justify-content-md-center">
            <Col xs lg="12">
              <p>
                Thank you for registering your children for the upcoming school year bus transportation.
                Bus Passes will be mailed directly to your home in late August before school starts.
                Bus Routes will be available online in late August.
                If you have any questions, please email&nbsp;
                <a href="mailto: busregistration@littletonps.org">
                  busregistration@littletonps.org
                </a>
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
      <Header adminYear={adminYear} notification={false}/>
      {pageBody}
    </div>
  );
}
FreeReg.defaultProps = {
  location: {}
};
FreeReg.propTypes = {
  location: PropTypes.object,
  adminYear: PropTypes.string.isRequired
};
export default FreeReg;
