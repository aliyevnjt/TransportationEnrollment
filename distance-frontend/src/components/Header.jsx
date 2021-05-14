import React, { useEffect, useState } from 'react';
import { Container, Col, Row, Image, Alert } from 'react-bootstrap';
import { schoolYear as year } from '../data/Data';
import './toolbox/littleton.css';
import logo from '../data/Littleton/logo.png';
import axios from 'axios';


function Header(props) {
  const [adminSettings, setAdminSettings] = useState();
  const baseURL = process.env.REACT_APP_BASE_URL;
  const { page } = props;
  const [helpMessage, setHelpMessage] = useState();
  const [regMessage, setRegMessage] = useState('');
  
  async function getAdminSettings() {
    
  }

  useEffect( async () => {
    try {
      const res = await axios.get(`${baseURL}/adminSettings`);
      const currentData = res.data.filter((obj) => obj.activeInd === 'Y');
      console.log("Current Data",currentData[0])
      setAdminSettings(currentData[0]);
      sessionStorage.setItem('adminSettings',JSON.stringify(currentData[0]))
      currentData[0].regStatus==='Open'
        ? sessionStorage.setItem('regStatusMessage',currentData[0].openMessage)
        : sessionStorage.setItem('regStatusMessage',currentData[0].closedMessage)
    } catch (err) {
      console.log(err);
    }

    if (page === 'admin') {
      setHelpMessage(<div />);
    }
    else{
      const sessionInfo = JSON.parse(sessionStorage.getItem('adminSettings'));
      setHelpMessage(
        <div>
          <Alert variant="info">
            <h5>
              {sessionStorage.getItem('regStatusMessage')}
            </h5>
            <br />
            If you experience any issues registering your child/ren, please email us
            at{' '}
            <a href="mailto: busregistration@littletonps.org">
              busregistration@littletonps.org
            </a>
            . Thank you for using our new automated registration system.
            <br />
          </Alert>
          {sessionInfo.notification1Status || sessionInfo.notification2Status ? 
          <Alert variant="warning">
            {sessionInfo.notification1Status ? 
            <h5>
              <b>Notice 1 - </b>
              {sessionInfo.notification1}
              <br />
            </h5>  : ''}
            {sessionInfo.notification2Status ? 
            <h5>
              <b>Notice 2 - </b>
              {sessionInfo.notification2}
            </h5> : ''}
          </Alert>
          : '' 
          }
        </div>
      );
    }
  },[]);

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

export default Header;
