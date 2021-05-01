import React from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import FormGroup from './FormGroup';

const ParentBox = (props) => {
  const { parentInfo, onChange } = props;

  return (
    <div>
      <Form.Row>
        <FormGroup
          id="parentName"
          type="text"
          value={parentInfo.parentName}
          onChange={onChange}
          label="* Parent Full Name"
          required
        />
        <FormGroup
          id="parentEmailAddress"
          type="email"
          value={parentInfo.parentEmailAddress}
          onChange={onChange}
          label="* Parent Email"
          required
        />
        <FormGroup
          id="parentPhoneNumber"
          type="tel"
          value={parentInfo.parentPhoneNumber}
          onChange={onChange}
          label="* Parent Phone"
          required
        />
      </Form.Row>
    </div>
  );
};
ParentBox.propTypes = {
  parentInfo: PropTypes.instanceOf({}).isRequired,
  onChange: PropTypes.func.isRequired,
};
export default ParentBox;
