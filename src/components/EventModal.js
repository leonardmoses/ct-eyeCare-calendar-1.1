import React, { useState , useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import UpdateModal from './UpdateModal'
import { months } from './JS/Snippets';

export default function EventModal(props) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const updateEventName = (id , e) => {
      id = props.id
      console.log(id)
      let newEventName = prompt("Enter New Event Name");
      axios.put(`${props.URL}/updateEventName`, {
        id: id,
        newEventName: newEventName
      });
    };

    const updateParticipants = (id , e) => {
      id = props.id
      console.log(id)
      const newParticipants = prompt("Type new participants");
      axios.put(`${props.URL}/updateparticipants`, {
        id: id,
        newParticipants: newParticipants
      });
    };

    const updateDescription = (id , e) => {
      id = props.id
      console.log(id)
      const newDescription = prompt("Type a new description");
      axios.put(`${props.URL}/updatedescription`, {
        id: id,
        newDescription: newDescription
      });
    };

    const deleteEvent = (id, e) => {
      id = props.id
      console.log(`${id}: ${props.eventName}: Deleted!`)
      axios.delete(`${props.URL}/deleteEvent/${id}`).then(() => {
        props.setEvents(props.events.filter((val) => {
          return val._id != id;
        }))
      }) 

    }

    const startMonth = months[props.eventStart.slice(5,7)]
    const startDay = props.eventStart.slice(8,10)
    const startTime = props.eventStart.slice(11,16)
    const endMonth = months[props.eventEnd.slice(5,7)]
    const endDay = props.eventEnd.slice(8,10)
    const endTime = props.eventEnd.slice(11,16)

    // console.log(props.events)

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
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.eventName}</Modal.Title> 



        </Modal.Header>
        <Modal.Body>
            {`Start Time: ${startTime} | Date: ${startMonth} ${startDay}`}

            <br/><br/>
            {`End Time: ${endTime} | Date: ${endMonth} ${endDay}`}
            <br/><br/>
            Description: {props.eventDescription}


            <br/><br/>
            Participants: {props.eventParticipants} <br/>

            <br/>
            <Button variant="success" size="sm" onClick={(id) => {
              updateEventName(id)
            }}>Edit Event Name</Button>
            <Button variant="success" size="sm" onClick={(id) => {
              updateParticipants(id)
            }}>Edit Participants</Button>
            <Button variant="success" size="sm" onClick={(id) => {
              updateDescription(id)
            }}>Edit Description</Button>

            <br/><br/><br/><br/>

            <Button variant="danger" onClick={(id) => {
              deleteEvent(id)
            }}>Delete Event</Button>
            

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
