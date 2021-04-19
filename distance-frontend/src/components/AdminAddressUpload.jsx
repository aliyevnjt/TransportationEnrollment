import React, { useState } from 'react';
import {
  Button, Form, Col, Table,
} from 'react-bootstrap';
import axios from 'axios';
import { importURL } from '../data/Data';

function AdminAddressUpload() {
  const [file, setFile] = useState({
    name: 'Select file',
  });
  const uploadFile = async () => {
    console.log(file);
    if (file.size > 0) {
      const res = await axios.post(`${importURL}/uploadAddresses`, file, {
        headers: {
          'Content-Type': file.type,
        },
      });
      console.log(res);
    }
  };
  return (
    <div>
      <Form.Row>
        <Form.Group as={Col} controlId="uploadFile">
          <Form.Text id="passwordHelpBlock" muted>
            You can browse or drag and drop an excel or csv file to upload
            address data
          </Form.Text>
          <Form.File
            className="col-md-6"
            id="filePath"
            label={file.name}
            onChange={(e) => setFile(e.target.files[0])}
            custom
          />
        </Form.Group>
      </Form.Row>
      <Button
        as="input"
        type="submit"
        value="Upload File"
        onClick={uploadFile}
      />
      <br />
      <br />
      <strong>SAMPLE EXCEL FILE FORMAT</strong>
      <Table id="adminSearch" striped bordered hover>
        <thead>
          <tr>
            <th key="number">Number</th>
            <th key="address">Address</th>
            <th key="MS">Middle School</th>
            <th key="HS">High School</th>
            <th key="SLH">Shaker Lane School</th>
            <th key="RSS">Russell Street School</th>
            <th key="status">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td key="6">3</td>
            <td key="ABENAKI">ABENAKI TL</td>
            <td key="1">2.91</td>
            <td key="2">3.47</td>
            <td key="3">4.25</td>
            <td key="4">3.12</td>
            <td key="5">AUTOMATIC</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
export default AdminAddressUpload;
