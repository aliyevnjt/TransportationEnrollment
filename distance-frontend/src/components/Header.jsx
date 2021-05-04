import React from 'react';
import {
  Container, Col, Row, Image
} from 'react-bootstrap';
import PropTypes from 'prop-types';

function Header(props) {
  const {adminYear} = props;
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
            {adminYear}-{parseInt(adminYear) + 1}
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
Header.propTypes = {
  adminYear: PropTypes.string.isRequired
};
export default Header;
