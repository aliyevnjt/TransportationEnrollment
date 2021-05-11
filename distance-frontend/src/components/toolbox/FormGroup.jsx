import React from 'react';
import { Col, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

const FormGroup = (props) => {
  const { id, onChange, label, type, placeholder, disabled, required } = props;
  return (
    <Form.Group as={Col} lg="3" md="4" sm="6" xs="12">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        id={id}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
      />
      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
    </Form.Group>
  );
};

FormGroup.defaultProps = {
  type: '',
  disabled: false,
  required: true,
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
  required: PropTypes.bool,
};
export default FormGroup;
