import React from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import FormGroup from './FormGroup';

const AddressBoxStatic = (props) => {
  const { addressInfo, onChange } = props;

  return (
    <div>
      <Form.Row>
        <FormGroup
          id="address"
          type="text"
          value={addressInfo.address}
          onChange={onChange}
          label="* Address"
          placeholder="1234 Main St"
          required
        />
        <FormGroup
          id="city"
          value={addressInfo.city}
          label="City"
          placeholder={addressInfo.city}
          disabled="true"
        />
        <FormGroup
          id="state"
          value={addressInfo.state}
          label="State"
          placeholder={addressInfo.state}
          disabled="true"
        />
        <FormGroup
          id="zip"
          type="text"
          value={addressInfo.zipCode}
          label="Zip"
          placeholder={addressInfo.zipCode}
          disabled="true"
        />
      </Form.Row>
    </div>
  );
};
AddressBoxStatic.propTypes = {
  addressInfo: PropTypes.instanceOf({}).isRequired,
  onChange: PropTypes.func.isRequired,
};
export default AddressBoxStatic;
