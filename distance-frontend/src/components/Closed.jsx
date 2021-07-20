import React, { useEffect, useState } from 'react';
import { Container, Col, Row, Image, Alert } from 'react-bootstrap';
import { schoolYear as year } from '../data/Data';
import './toolbox/littleton.css';
import logo from '../data/Littleton/logo.png';
import axios from 'axios';
import PropTypes from 'prop-types';

function Closed(props) {
  const baseURL = process.env.REACT_APP_BASE_URL;
  const { page, notification } = props;
  const [helpMessage, setHelpMessage] = useState();
  let regStatus = '';
  let adminSettings;

  useEffect(async () => {
    try {
      const res = await axios.get(`${baseURL}/adminSettings`);
      const currentData = res.data.filter((obj) => obj.activeInd === 'Y');
      // console.log("Current Data",currentData[0])
      adminSettings = currentData[0];
      adminSettings.regStatus
        ? regStatus = adminSettings.regStatus.toLowerCase() + 'Message'
        : '';
    } catch (err) {
      console.log(err);
      adminSettings = '';
    }

    if (page === 'admin') {
      setHelpMessage(<div />);
    } else {
      setHelpMessage(
        <div>
          <Alert variant="info">
            {adminSettings[regStatus]
              ? <div>
                {adminSettings[regStatus]}
                <br />
              </div>
              : ''}
          </Alert>
        </div>
      );
    }
  }, []);

  // TODO populate alert message from adminSettings
  return (
    <Container className="pt-3">
      <Row className="littleton-head-bg">
        <Col xs={6} md={4}>
          <Image src={logo} rounded className="logo" />
        </Col>
        <Col md={{ span: 4, offset: 4 }} className="my-auto">
          <h5 className="header text-white">School Year: {year}</h5>
        </Col>
      </Row>
      <Row className="mt-1 mb-2 mt-5">
        <h4 className="mx-auto">School Bus Registration Form</h4>
      </Row>
      {helpMessage}
    </Container>
  );
}

Closed.defaultProps = {
  page: '',
  notification: true
};

Closed.propTypes = {
  page: PropTypes.string,
  notification: PropTypes.bool
};

export default Closed;
