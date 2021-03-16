import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';

const InputComponent = (props) => {
  const {
    id, size, value, onChange, buttonText,
  } = props;
  return (
    <InputGroup size={size}>
      <InputGroup.Prepend>
        <InputGroup.Text>{buttonText}</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        id={id}
        onChange={onChange}
        value={value}
        aria-label="Large"
        aria-describedby="inputGroup-sizing-sm"
      />
    </InputGroup>
  );
};
InputComponent.propTypes = {
  id: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
};
export default InputComponent;
