import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { CSVLink } from 'react-csv';
import JsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import Dropdown from './toolbox/Dropdown';
import useAdminInput from './useAdminInput';
import {
  cities, grades, schools, states, headers,
} from '../data/Data';
import FormGroup from './toolbox/FormGroup';
import Student from './Student';

function AdminSearch() {
  const {
    inputs, handleInputChange, handleSubmit, table, adminSearchData,
  } = useAdminInput();
  const [gradeOptions, setGradeOptions] = useState(grades);

  const handleSchoolDropdown = (event) => {
    const newGradeOptions = grades.filter((g) => g.level === event.target.value);
    setGradeOptions(newGradeOptions);
    handleInputChange(event);
  };
  const handlePDFdownload = () => {
    const doc = new JsPDF();
    autoTable(doc, { html: '#adminSearch' });
    doc.save('adminSearch.pdf');
  };
  return (
    <div>
      <Form id="adminForm" onSubmit={handleSubmit}>
        
        <Student />
        <Form.Row>
          <FormGroup
            id="address"
            onChange={handleInputChange}
            value={inputs.address}
            label="First Name"
            type="text"
            placeholder="1234 Main St"
          />
          <Dropdown
            id="city"
            onChange={handleInputChange}
            value={inputs.city}
            label="City"
            options={cities}
          />
          <Dropdown
            id="state"
            onChange={handleInputChange}
            value={inputs.state}
            label="State"
            options={states}
          />
          <FormGroup
            id="zip"
            onChange={handleInputChange}
            value={inputs.zip}
            label="Zip"
            placeholder="enter zip code"
          />
        </Form.Row>

        <Button as="input" className="mr-1" type="submit" value="Search" />
        <CSVLink
          data={adminSearchData}
          headers={headers}
          filename="my-file.csv"
          className="btn btn-primary ml-3"
        >
          Download as CSV
        </CSVLink>
        <Button
          as="input"
          onClick={handlePDFdownload}
          className="ml-3"
          type="submit"
          value="Download as PDF"
        />
      </Form>
      <br />
      {table}
    </div>
  );
}

export default AdminSearch;
