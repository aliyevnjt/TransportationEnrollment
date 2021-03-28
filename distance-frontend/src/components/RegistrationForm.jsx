import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import {
  Container, Form, Button, Jumbotron,
} from 'react-bootstrap';
import Dropdown from './toolbox/Dropdown';
import {
  states, cities, baseURL,
} from '../data/Data';
import Header from './Header';
import FormGroup from './toolbox/FormGroup';
import Student from './Student';

function RegistrationForm() {
  const [studentData, setStudentData] = useState([{ schoolYear: 'FY22' }]);
  const [counter, setCounter] = useState(0);
  const [sibling, setSibling] = useState([]);
  const history = useHistory();

  const handleSubmit = async (event) => {
    if (event) {
      event.preventDefault();
      console.log(studentData);
      if (event.target.id === 'registrationForm') {
        try {
          console.log(studentData);
          const res = await axios.post(`${baseURL}/student/`, studentData);
          console.log(res);
          if (res.data.enrollmentStatus === 'free') {
            studentData({
              pathname: '/freeReg',
              search: '',
              state: { detail: res.data },
              student: res.data,
            });
          } else {
            history({
              pathname: '/payment',
              search: '',
              state: { detail: res.data },
              student: res.data,
            });
          }
        } catch (err) {
          console.log(err);
        }
      }
    }
  };

  const handleInputChange = (event) => {
    const eventCounter = parseInt(event.target.parentElement.parentElement.getAttribute('counter'));
    console.log('counter:', counter);
    console.log('studentData:', studentData);

    setStudentData(() => (studentData.map((currentStudent, index) => {
      console.log('currentStudent:', currentStudent);
      console.log('index:', index);
      console.log('eventCounter:', eventCounter);
      console.log('EQUAL?:', index === eventCounter);

      if (index === eventCounter) {
        console.log('INSIDEinputObj:', currentStudent);
        return {
          ...currentStudent,
          [event.target.id]: event.target.value,
        };
      }
      return currentStudent;
    })));

    // setStudentData(() => ({ ...studentData, [event.target.id]: event.target.value }));
  };

  const addSibling = () => {
    setStudentData((previous) => [...previous, { schoolYear: 'FY23' }]);
    setSibling((previous) => [...previous, <Student
      counter={counter + 1}
      //This is not passed properly
        //does not matter even if we pass in as studentData[counter+1]
        //https://stackoverflow.com/questions/59344747/changing-multiple-states-in-react-js-usestate-hook
        //we are not just changing states but also passing it to a child to be rendered in the same load
        //
      studentData={studentData}
      onChange={handleInputChange}
    />]);
    setCounter(counter + 1);
    console.log('Siblings studentData:', studentData);
    console.log('Sibling data:', sibling);
  };

  return (
    <div>
      <Header />
      <Container className="pt-3">
        <Jumbotron>
          <Form id="registrationForm" onSubmit={handleSubmit}>
            <Student
              counter={0}
              studentData={studentData}
              onChange={handleInputChange}
            />
            <Form.Row counter={0}>
              <FormGroup
                id="address"
                type="text"
                value={studentData[0].address}
                onChange={handleInputChange}
                label="* Address"
                placeholder="1234 Main St"
                required
              />
              <Dropdown
                id="city"
                value={studentData[0].city}
                onChange={handleInputChange}
                label="* City"
                required
                options={cities}
              />
              <Dropdown
                id="state"
                value={studentData[0].state}
                onChange={handleInputChange}
                label="* State"
                required
                options={states}
              />
              <FormGroup
                id="zip"
                type="text"
                value={studentData[0].zip}
                onChange={handleInputChange}
                label="* Zip"
                placeholder="enter zip code"
                required
                showLabel
              />
            </Form.Row>

            <Form.Row counter={0}>
              <FormGroup
                id="parentName"
                type="text"
                value={studentData[0].parentName}
                onChange={handleInputChange}
                label="* Parent Full Name"
                required
              />
              <FormGroup
                id="parentEmailAddress"
                type="email"
                value={studentData[0].parentEmailAddress}
                onChange={handleInputChange}
                label="* Parent Email"
                required
              />
              <FormGroup
                id="parentPhoneNumber"
                type="tel"
                value={studentData[0].parentPhoneNumber}
                onChange={handleInputChange}
                label="* Parent Phone"
                required
              />
            </Form.Row>
            {sibling.map((sblg) => sblg)}
            <Form.Row>
              <Button as="input" value="Add Sibling" onClick={addSibling} />
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

export default RegistrationForm;
