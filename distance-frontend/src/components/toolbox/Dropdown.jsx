import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

const Dropdown = (props) => {
  const {
    id, options, onChange,
  } = props;
  let { label } = props;
  if (label.startsWith('*')) {
    label = label.substr(2);
  }
  return (
    <Form.Group>
      <Form.Label>
        {label}
      </Form.Label>
      <Form.Control
        as="select"
        id={id}
        onChange={onChange}
      >
        <option value="">{label}</option>
        {
          options.map((o) => (
            <option key={o.label} value={o.value}>{o.label}</option>
          ))
        }
      </Form.Control>
    </Form.Group>
  );
};

Dropdown.propTypes = {
  id: PropTypes.string.isRequired,
  options: PropTypes.shape([]).isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Dropdown;
