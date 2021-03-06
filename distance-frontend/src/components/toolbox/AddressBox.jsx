import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Typeahead } from 'react-bootstrap-typeahead';
import { Card, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import FormGroup from './FormGroup';

const AddressBox = (props) => {
  const baseURL = process.env.REACT_APP_BASE_URL;
  const ref = useRef();
  const { addressInfo, onChange } = props;
  const [selections, setSelections] = useState([]);
  const [address, setAddress] = useState([]);
  let allData;

  useEffect(() => {
    async function fetchData() {
      // HOW MANY TIMES IS THIS CALL MADE???
      const res = await axios.get(`${baseURL}/addresses`);
      allData = res.data;
      // console.log(allData);
      setAddress(allData);
      onChange(selections);
    }
    fetchData();
  }, []);

  const handleAddressChange = (event) => {
    // console.log('Handle Add Change', event);
    setSelections(event);
    if (event[0]) {
      // console.log(event);
      onChange(event[0].address);
    }
  };
  const validateAddress = (event) => {
    // console.log('BLUR', event);
    if (!address.find((item) => item.address === event.target.value)) {
      ref.current.clear();
    }
  };
  return (
    <div>
      <Card className="mb-3 ">
        <Card.Body className="app-bg-color-grey">
          <Form.Row>
            <Form.Group>
              <Form.Label>Address</Form.Label>
              <Typeahead
                id="address"
                labelKey="address"
                onChange={handleAddressChange}
                options={address}
                placeholder="Select your address"
                defaultValue={selections}
                inputProps={{ required: true, autoComplete: 'harezmi' }}
                clearButton
                ref={ref}
                onBlur={validateAddress}
              />
              <Form.Control.Feedback type="invalid">
                Please, choose a valid address from the list.
              </Form.Control.Feedback>
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
        </Card.Body>
      </Card>
    </div>
  );
};
AddressBox.defaultProps = {
  required: true,
};
AddressBox.propTypes = {
  addressInfo: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
};
export default AddressBox;
