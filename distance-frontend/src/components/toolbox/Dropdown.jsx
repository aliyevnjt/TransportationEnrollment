import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

const Dropdown = (props) => {
  const { id, options, onChange, value, required, defaultVal, disabled } = props;
  let { label } = props;
  // console.log('getRegistrationYear:', value);
  // console.log('DROPDOWN component is loaded', value);
  // FIXME look into defaultValue in options
  return (
    <Form.Group lg="3" md="4" sm="6" xs="12">
      <Form.Label>{label}</Form.Label>
      <Form.Control as="select" id={id} required={required} onChange={onChange} disabled={disabled}>
      {defaultVal ? 
        <option value="">{ defaultVal }</option>
        : ''}
        {options.map((o) => (
          <option
            key={o.label}
            defaultValue={value===o.label}
            value={o.value}>
            {o.label}
          </option>
        ))}
      </Form.Control>
      <Form.Control.Feedback type="invalid">
        Please choose a value.
      </Form.Control.Feedback>
    </Form.Group>
  );
};

Dropdown.defaultProps = {
  required: true,
  disabled: false
};
Dropdown.propTypes = {
  id: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  required: PropTypes.bool,
  defaultVal: PropTypes.string,
  disabled: PropTypes.bool
};
export default Dropdown;
