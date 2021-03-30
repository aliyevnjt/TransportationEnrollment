import React, { useState } from 'react';
import {
  Container, Form, Button, Jumbotron,
} from 'react-bootstrap';
import useAdminInput from './useAdminInput';
import Dropdown from './toolbox/Dropdown';
import {
  states, cities, schools, grades,
} from '../data/Data';
import Header from './Header';
import FormGroup from './toolbox/FormGroup';
import Student  from './Student';
import AddressBox from './toolbox/AddressBox'


function regFormFromExcelAddress() {
  const {
    inputs, handleInputChange, handleSubmit,
  } = useAdminInput();

  const [gradeOptions, setGradeOptions] = useState(grades);
  // const schoolYear="FY22";

  const handleSchoolDropdown = (event) => {
    const newGradeOptions = grades.filter((g) => g.level === event.target.value);
    setGradeOptions(newGradeOptions);
    handleInputChange(event);
  };

  const [counter, setCounter] = useState(1);
  const [sibling,setSibling]=useState([]);

  const addSibling = (event) => {
    setSibling([...sibling, <Student key = {counter} id={`Student${counter}`}/>])
    setCounter(counter+1);
  }

  return (
    <div>
      <Header />
      <Container className="pt-3">
        <Jumbotron>
          <Form id="regFormFromExcelAddress" onSubmit={handleSubmit}>
            <Student />
            <Form.Row>
              <AddressBox />
              
              {/* <FormGroup
                id="address"
                type="text"
                value={inputs.address}
                onChange={handleInputChange}
                label="* Address"
                placeholder="1234 Main St"
                required
              /> */}
              <Dropdown
                id="city"
                value={inputs.city}
                onChange={handleInputChange}
                label="* City"
                required
                options={cities}
              />
              <Dropdown
                id="state"
                value={inputs.state}
                onChange={handleInputChange}
                label="* State"
                required
                options={states}
              />
              <FormGroup
                id="zip"
                type="text"
                value={inputs.zip}
                onChange={handleInputChange}
                label="* Zip"
                placeholder="enter zip code"
                required
                showLabel
              />
            </Form.Row>

            <Form.Row>
              <FormGroup
                id="parentName"
                type="text"
                value={inputs.parentName}
                onChange={handleInputChange}
                label="* Parent Full Name"
                required
              />
              <FormGroup
                id="parentEmailAddress"
                type="email"
                value={inputs.parentEmailAddress}
                onChange={handleInputChange}
                label="* Parent Email"
                required
              />
              <FormGroup
                id="parentPhoneNumber"
                type="tel"
                value={inputs.parentPhoneNumber}
                onChange={handleInputChange}
                label="* Parent Phone"
                required
              />
            </Form.Row>
            {sibling.map(sblg =>sblg)}

            <Form.Row>
            <Button as="input" value="Add Sibling" onClick={addSibling}/>
            
            </Form.Row>

            <Button as="input" value="Continue" type="submit" />
          </Form>
          {/* <button onClick={this.freeSample}>Free Sample</button> */}
          {/* <button onClick={this.paidSample}>Paid Sample</button> */}
          
        </Jumbotron>
      </Container>

    </div>
  );
}

export default regFormFromExcelAddress;
