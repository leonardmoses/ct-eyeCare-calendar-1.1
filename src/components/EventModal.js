import React, { useState , useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function EventModal(props) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const deleteRequest = (id, e) => {
        id = props.id
        e.preventDefault();
        axios.delete(`${props.URL}/${id}`)
        .then(res => console.log('Deleted Event!', res)).catch(err => console.log(err))
    }

    // console.log(`${props.URL}/${props.id}`)
    let id = props.event.ID
    // console.log(id)
  return (
    <>
      <div variant="primary" onClick={handleShow}>
        {props.eventName}
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.eventName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

            Start Time: {props.eventStart}
            <br/><br/>
            End Time: {props.eventEnd}
            <br/><br/>
            Description: {props.eventDescription}
            <br/><br/>
            Participants: {props.eventParticipants}
            <br/><br/><br/><br/>

            <Button variant="primary" onClick={(e) => deleteRequest(id, e)}>Delete Event</Button>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
