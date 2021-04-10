import React, { useState } from 'react';
import {
  Button, Form, Col,
} from 'react-bootstrap';
import axios from 'axios';
import { importURL } from '../data/Data';

function AdminFileUpload() {
  const [file, setFile] = useState({
    name: 'Select file',
  });
  const uploadFile = async () => {
    console.log(file);
    if (file.size > 0) {
      await axios.post(`${importURL}`, file, {
        headers: {
          'Content-Type': file.type,
        },
      });
    }
  };
  return (
    <div>
      <Form.Row>
        <Form.Group as={Col} controlId="uploadFile">
          <Form.Text id="passwordHelpBlock" muted>
            You can browse or drag and drop an excel or csv file
            with the appropriate columns to upload student data.
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
      <Button as="input" type="submit" value="Upload File" onClick={uploadFile} />
    </div>
  );
}
export default AdminFileUpload;
