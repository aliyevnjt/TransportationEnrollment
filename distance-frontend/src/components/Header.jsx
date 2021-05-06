import React from 'react';
import { Container, Col, Row, Image, Alert } from 'react-bootstrap';
import { schoolYear as year } from '../data/Data';
import './toolbox/littleton.css';
import logo from '../data/Littleton/logo.png';

function Header() {
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
      <Alert variant="info">
                If you experience any issues registering your child/ren, please email us
                at{' '}
        <a href="mailto: busregistration@littletonps.org">
                    busregistration@littletonps.org
        </a>
                . Thank you for using our new automated registration system.
      </Alert>
    </Container>
  );
}

export default Header;
