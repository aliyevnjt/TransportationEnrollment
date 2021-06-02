import React, {useEffect, useState} from 'react';
import { Button, Form, Card, Col, Row } from 'react-bootstrap';
import { CSVLink } from 'react-csv';
import JsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import axios from 'axios';
import {
  headers, locality, enrollmentStatus, paymentType
} from '../data/Data';
import Student from './toolbox/Student';
import constructTable from './toolbox/ConstructTable';
import Dropdown from './toolbox/Dropdown';

function AdminSearch() {
  // TODO how does it work if students have registrations for multiple years
  // do we keep adding to student_info or create student_info_2022 ...
  // FIXME cannot search with address and/or other fields
  const baseURL = process.env.REACT_APP_BASE_URL;
  const [paymentDisabled, setPaymentDisabled] = useState(true);

  const [addressInfo, setAddressInfo] = useState({
    city: locality.city,
    state: locality.state,
    zip: locality.zipCode
  });
  const [inputs, setInputs] = useState({});
  const [table, setTable] = useState();
  const [adminSearchData, setAdminSearchData] = useState([{}]);
  const data = {
    id: 'adminSearch',
    headers: {
      fname: 'First Name',
      lname: 'Last Name',
      grade: 'Grade',
      enrollmentStatus: 'Program Type',
      registrationStatus: 'Registration Status',
      distanceFromSchool: 'Distance',
      address: 'Address',
      school: 'School'
    },
    options: ''
  };

  useEffect(() => {
    // inputs state is updated with address info
    setInputs((current) => ({
      ...current, ...addressInfo
    }));
  }, [addressInfo]);
  const handlePDFdownload = () => {
    const doc = new JsPDF();
    autoTable(doc, { html: '#adminSearch' });
    doc.save('adminSearch.pdf');
  };
  const handleSubmit = async (event) => {
    if (event) {
      event.preventDefault();
      // console.log(inputs)
      if (event.target.id === 'adminForm') {
        // console.log('inputs', inputs);
        try {
          const res = await axios.post(`${baseURL}/studentSearch`, inputs);
          data.options = res.data;
          setTable(constructTable(data, 'adminSearch'));
          setAdminSearchData(res.data);
        } catch (err) {
          console.log(err);
        }
      }
    }
  };
  const handleInputChange = (event) => {
    if (event.target.id === 'enrollmentStatus'){
      event.target.value === "paid" ? setPaymentDisabled(false) : setPaymentDisabled(true)
    } 
    setInputs((previous) => ({ ...previous, [event.target.id]: event.target.value }));
  };
  const handleAddressInfoChange = (address) => {
    setAddressInfo((previous) => ({ ...previous, address }));
    // console.log(address);
  };
  // console.log('adminSearchData', adminSearchData);
  return (
    <div>
      <Form noValidate id="adminForm" onSubmit={handleSubmit}>
        <Student
          counter={0}
          onChange={handleInputChange}
          hasDOB={false}
        />
        <Card>
          <Card.Body className="app-bg-color-grey">
            <Row className="justify-content-md-left">
              <Col lg="5" md="7" sm="8" xs="12">
                <Dropdown
                  id="enrollmentStatus"
                  onChange={handleInputChange}
                  label="Enrollment Status"
                  options={enrollmentStatus}
                  defaultVal="Select Status"
                />
            </Col>
            <Col lg="5" md="7" sm="8" xs="12">
              <Dropdown
                id="paymentType"
                onChange={handleInputChange}
                disabled={paymentDisabled}
                label="Payment Type"
                options={paymentType}
                defaultVal="Select Payment"
              />
              </Col>
            </Row>
            </Card.Body>
          </Card>
        <Button as="input" className="mr-1" type="submit" value="Search" />

        <Button
          as="input"
          onClick={handlePDFdownload}
          className="ml-3"
          type="submit"
          value="Download as PDF"
        />
        <CSVLink
          data={adminSearchData}
          headers={headers}
          filename="my-file.csv"
          className="btn btn-primary ml-3"
        >
          Download as CSV
        </CSVLink>
      </Form>
      <br />
      {table}
    </div>
  );
}

export default AdminSearch;
