import React, {useState, useEffect, useRef, Fragment} from 'react';
import axios from 'axios'
import { appUrl } from '../../data/Data';
import { Typeahead } from 'react-bootstrap-typeahead';
import { Form } from 'react-bootstrap';

const GetAddresses = () => {
  const [selections, setSelections] = useState([]);
  const [address,setAddress] = useState([]);

  useEffect(async()=>{
    const res = await axios.get(`${appUrl.baseline}/addresses`);
    setAddress(res.data);
  },[])

  return (
      <div>
        <Form.Group>
        <Form.Label>Address</Form.Label>
        <Typeahead
            id="address"
            labelKey="address"
            onChange={setSelections}
            options={address}
            placeholder="Enter your address"
            selected={selections}
        />
        </Form.Group>
      </div>
  );
};

export default GetAddresses;
