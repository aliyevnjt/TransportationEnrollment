import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function MessageBox(props) {
  const { message, show } = props;
  const [showModal, setShowModal] = useState(show);
  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <>
      <Modal
        onHide={handleClose}
        show={showModal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>
          <Modal.Title>Hello World</Modal.Title>
        </Modal.Header>
        <Modal.Body>{message}</Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MessageBox;
