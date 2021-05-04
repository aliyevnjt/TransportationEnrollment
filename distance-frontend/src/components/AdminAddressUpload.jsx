import React, { useState } from 'react';
import {
  Button, Form, Col, Table
} from 'react-bootstrap';
import axios from 'axios';
import { baseURL } from '../data/Data';

function AdminAddressUpload() {
  const [file, setFile] = useState({
    name: 'Select file'
  });

  // FIXME if you browse for a file but not select it and click somewhere else, app crashes
  const uploadFile = async () => {
    console.log(file);
    // const formData = new FormData();
    // formData.append('file', file);
    if (file.size > 0) {
      // FIXME file upload does not work. Tried many ways but no solution.
      // Will turn your form to `multipart/form-data`
      // const data = new FormData();
      // data.append('file', file);
      const res = await axios.post(`${baseURL}/uploadAddresses`, file
      //     , {
      //   enctype: 'multipart/form-data'
      // }
      ).catch((e) => console.log('File upload failed! ', e));
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
            <th key="address">Address</th>
            <th key="LMS">Littleton Middle School</th>
            <th key="SLH">Shaker Lane School</th>
            <th key="RSS">Russell Street School</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td key="0">3 ABENAKI TL</td>
            <td key="1">2.91</td>
            <td key="2">3.47</td>
            <td key="3">4.25</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
export default AdminAddressUpload;
