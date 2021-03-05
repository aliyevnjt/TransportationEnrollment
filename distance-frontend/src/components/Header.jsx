import React from 'react';
import {
  Container, Col, Row, Image,
} from 'react-bootstrap';
import { schoolYear as year } from '../data/Data';

function Header() {
  return (
    <Container className="pt-3">
      <Row>
        <Col xs={6} md={4}>
          <Image src="https://www.littletonps.org/files/Images/LPS%20Logo%20-%20large%20text.jpg" thumbnail />
        </Col>
        <Col md={{ span: 4, offset: 4 }}>
          <h6 className="header">
            School Year:
            {' '}
            {year}
          </h6>
        </Col>
      </Row>
      <Row className="mt-1 mb-2">
        <h4 className="mx-auto">
          Transportation Form
        </h4>
      </Row>
    </Container>
  );
}

export default Header;
