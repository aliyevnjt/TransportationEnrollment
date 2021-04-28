import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typeahead } from 'react-bootstrap-typeahead';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { baseURL } from '../../data/Data';
import FormGroup from './FormGroup';

const AddressBox = (props) => {
  const { addressInfo, onChange } = props;
  const [selections, setSelections] = useState([]);
  const [address, setAddress] = useState([]);
  let allData;

  useEffect(() => {
    async function fetchData() {
      // HOW MANY TIMES IS THIS CALL MADE???
      const res = await axios.get(`${baseURL}/addresses`);
      allData = res.data;
      //console.log(allData);
      setAddress(allData);
      onChange(selections);
    }
    fetchData();
  }, []);

  const handleAddressChange = (event) => {
    console.log('Handle Add Change', event);
    setSelections(event);
    if (event[0]) {
      console.log(event);
      onChange(event[0].address);
    }
  };
  // console.log(selections);
  // FIXME chrome aufill does not update the state
  // look in onInputChange of Typehead
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
            placeholder="Select your address"
            selected={selections}
            inputProps={{ autoComplete: 'off' }}
          />
        </Form.Group>
        <FormGroup
          id="city"
          value={addressInfo.city}
          label="City"
          placeholder={addressInfo.city}
          disabled={true}
        />
        <FormGroup
          id="state"
          value={addressInfo.state}
          label="State"
          placeholder={addressInfo.state}
          disabled={true}
        />
        <FormGroup
          id="zip"
          type="text"
          value={addressInfo.zip}
          label="Zip"
          placeholder={addressInfo.zip}
          disabled={true}
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
