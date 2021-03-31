import React from 'react';
import { Col, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

const FormGroup = (props) => {
  const {
    id, onChange, label, type, placeholder, 
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
      />
    </Form.Group>
  );
};

FormGroup.defaultProps = {
  type: '',
};
FormGroup.propTypes = {
  
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
};
export default FormGroup;