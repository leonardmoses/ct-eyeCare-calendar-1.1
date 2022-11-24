import React, { useState , useEffect } from 'react';
import axios, { Axios } from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function UpdateModal(props) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Update 
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.eventName}</Modal.Title> 
        </Modal.Header>

        <Modal.Body>
            id: {props.id}
            <br/><br/>

            Event Name:
            <input 
            placeholder={props.eventName}
            />
            <br/><br/>

            Start Time:
            <input 
            placeholder={props.eventStart}
            />
            <br/><br/>

            End Time: 
            <input
            placeholder={props.eventEnd}
            />
            <br/><br/>

            Description: 
            <input
            placeholder={props.eventDescription}
            />
            <br/><br/>

            Participants:
            
            <input
            placeholder={props.eventParticipants}
            />
            
            <br/><br/><br/><br/>
            

        </Modal.Body>
        <Modal.Footer>
            <Button variant="success" onClick={handleClose}>
                Update
            </Button>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
