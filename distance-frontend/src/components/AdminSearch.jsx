import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { CSVLink } from 'react-csv';
import JsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import axios from 'axios';
import { headers, baseURL, locality } from '../data/Data';
import Student from './Student';
import constructAdminTable from './toolbox/ConstructAdminTable';
import AddressBox from './toolbox/AddressBox';

function AdminSearch() {
  const [addressInfo, setAddressInfo] = useState({
    city: locality.city,
    state: locality.state,
    zipCode: locality.zipCode,
  });
  const [inputs, setInputs] = useState({});
  const [table, setTable] = useState();
  const [adminSearchData, setAdminSearchData] = useState([{}]);

  const handlePDFdownload = () => {
    const doc = new JsPDF();
    autoTable(doc, { html: '#adminSearch' });
    doc.save('adminSearch.pdf');
  };
  const handleSubmit = async (event) => {
    if (event) {
      event.preventDefault();
      if (event.target.id === 'adminForm') {
        console.log(addressInfo);
        setInputs((current) => ({
          ...current, ...addressInfo,
        }));
        try {
          const res = await axios.post(`${baseURL}/student/request/`, inputs);
          console.log(res);
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
  return (
    <div>
      <Form id="adminForm" onSubmit={handleSubmit}>
        <Student
          counter={0}
          onChange={handleInputChange}
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
          value="Download table as PDF"
        />
        <CSVLink
          data={adminSearchData}
          headers={headers}
          filename="my-file.csv"
          className="btn btn-primary ml-3"
        >
          Download all data as CSV
        </CSVLink>
      </Form>
      <br />
      {table}
    </div>
  );
}

export default AdminSearch;
