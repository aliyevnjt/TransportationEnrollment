import React, {useEffect, useState} from 'react';
import { Button, Form } from 'react-bootstrap';
import { CSVLink } from 'react-csv';
import JsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import axios from 'axios';
import {
  headers, locality, enrollmentStatus
} from '../data/Data';
import Student from './toolbox/Student';
import constructTable from './toolbox/ConstructTable';
import Dropdown from './toolbox/Dropdown';

function AdminSearch() {
  // TODO how does it work if students have registrations for multiple years
  // do we keep adding to student_info or create student_info_2022 ...
  // FIXME cannot search with address and/or other fields
  const baseURL = process.env.REACT_APP_BASE_URL;

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
      enrollmentStatus: 'Status',
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
      if (event.target.id === 'adminForm') {
        console.log('inputs', inputs);
        try {
          const res = await axios.post(`${baseURL}/studentSearch`, inputs);
          data.options = res.data;
          setTable(constructTable(data));
          setAdminSearchData(res.data);
        } catch (err) {
          console.log(err);
        }
      }
    }
  };
  const handleInputChange = (event) => {
    setInputs((previous) => ({ ...previous, [event.target.id]: event.target.value }));
  };
  const handleAddressInfoChange = (address) => {
    setAddressInfo((previous) => ({ ...previous, address }));
    console.log(address);
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
        <Dropdown
          id="enrollmentStatus"
          onChange={handleInputChange}
          label="Enrollment Status"
          options={enrollmentStatus}
        />
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
