import React from 'react';
import { Card, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import FormGroup from './FormGroup';

const ParentBox = (props) => {
  const { parentInfo, onChange } = props;

  return (
    <div>
      <Card className="mb-3">
        <Card.Header>Parent Information</Card.Header>
        <Card.Body className="app-bg-color-grey">
          <Form.Row>
            <FormGroup
              id="parentName"
              type="text"
              value={parentInfo.parentName}
              onChange={onChange}
              label="Full Name"
              required
            />
            <FormGroup
              id="parentEmailAddress"
              type="email"
              value={parentInfo.parentEmailAddress}
              onChange={onChange}
              label="Email Address"
              required
            />
            {/* TODO add phone number check and format it properly
          http://catamphetamine.github.io/react-phone-number-input
          */}
            <FormGroup
              id="parentPhoneNumber"
              type="tel"
              value={parentInfo.parentPhoneNumber}
              onChange={onChange}
              label="Phone Number"
              required
            />
          </Form.Row>
        </Card.Body>
      </Card>
    </div>
  );
};
ParentBox.propTypes = {
  parentInfo: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default ParentBox;
