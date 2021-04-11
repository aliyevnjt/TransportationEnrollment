import React, {useEffect, useState} from 'react';
import { Button, Form, Row } from 'react-bootstrap';
import { CSVLink } from 'react-csv';
import JsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import axios from 'axios';
import {
  headers, baseURL, locality, schoolYears, enrollmentStatus,
} from '../data/Data';
import Student from './Student';
import constructAdminTable from './toolbox/ConstructAdminTable';
import AddressBox from './toolbox/AddressBox';
import Dropdown from './toolbox/Dropdown';

function AdminSearch() {
  const [addressInfo, setAddressInfo] = useState({
    city: locality.city,
    state: locality.state,
    zipCode: locality.zipCode,
  });
  const [inputs, setInputs] = useState({});
  const [table, setTable] = useState();
  const [adminSearchData, setAdminSearchData] = useState([{}]);

  useEffect(() => {
    // inputs state is updated with address info
    setInputs((current) => ({
      ...current, ...addressInfo,
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
          const res = await axios.post(`${baseURL}/student/request/`, inputs);
          setTable(constructAdminTable(res.data));
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
      <Form id="adminForm" onSubmit={handleSubmit}>
        <Student
          counter={0}
          onChange={handleInputChange}
        />
        <Dropdown
          id="enrollmentStatus"
          onChange={handleInputChange}
          label="Enrollment Status"
          options={enrollmentStatus}
        />
        <AddressBox
          addressInfo={addressInfo}
          onChange={handleAddressInfoChange}
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
