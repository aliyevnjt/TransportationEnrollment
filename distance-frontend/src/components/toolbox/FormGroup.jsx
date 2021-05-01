import React from 'react';
import { Col, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

const FormGroup = (props) => {
  const {
    id, onChange, label, type, placeholder, disabled,
  } = props;
  return (
    <Form.Group
      as={Col}
    >
      <Form.Label>
        {label}
      </Form.Label>
      <Form.Control
        id={id}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
      />
    </Form.Group>
  );
};

FormGroup.defaultProps = {
  type: '',
  disabled: false,
  onChange: {},
  placeholder: '',
};
FormGroup.propTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};
export default FormGroup;
