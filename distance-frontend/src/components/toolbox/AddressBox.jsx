import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typeahead } from 'react-bootstrap-typeahead';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { appUrl } from '../../data/Data';
import FormGroup from './FormGroup';

const AddressBox = (props) => {
  const { addressInfo, onChange } = props;
  const [selections, setSelections] = useState([]);
  const [address, setAddress] = useState([]);

  useEffect(async () => {
    const res = await axios.get(`${appUrl.baseline}/addresses`);
    setAddress(res.data);
    onChange(selections);
  }, []);
  const handleAddressChange = (event) => {
    console.log(event);
    setSelections(event);
    onChange(event[0].address);
  };
  console.log(selections);
  return (
    <div>
      <Form.Row>
        <Form.Group>
          <Form.Label>Address</Form.Label>
          <Typeahead
            id="address"
            labelKey="address"
            onChange={handleAddressChange}
            options={address}
            placeholder="Enter your address"
            selected={selections}
          />
        </Form.Group>
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
AddressBox.propTypes = {
  addressInfo: PropTypes.instanceOf({}).isRequired,
  onChange: PropTypes.func.isRequired,
};
export default AddressBox;
