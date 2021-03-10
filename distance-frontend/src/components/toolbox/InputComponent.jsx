import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';

const InputComponent = (props) => {
  const { id, size } = props;
  return (
    <InputGroup size={size}>
      <InputGroup.Prepend>
        <InputGroup.Text id={id}>{id}</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
    </InputGroup>
  );
};
InputComponent.propTypes = {
  id: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  // label: PropTypes.string.isRequired,
};
export default InputComponent;
