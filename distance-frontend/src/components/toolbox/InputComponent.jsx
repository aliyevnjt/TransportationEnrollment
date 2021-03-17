import React from 'react';
import { FormControl, InputGroup, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

const InputComponent = (props) => {
  const {
    id, value, onChange, buttonText,
  } = props;
  return (
    <InputGroup size="lg">
      <InputGroup.Prepend>
        <InputGroup.Text>{buttonText}</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        as="textarea"
        id={id}
        onChange={onChange}
        value={value}
        aria-label="With textarea"
        aria-describedby="inputGroup-sizing-lg"
      />
    </InputGroup>
  );
};
InputComponent.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
};
export default InputComponent;
