import React, { useState , useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios, { Axios } from 'axios';
import {URL} from './JS/URLS';
import { currentDateTime } from "./JS/Snippets";


export default function MainModal(props) {

    let [events, setEvents] = useState('')

    const [eventName, setEventName] = useState('')
    const [startTime, setStartTime] = useState(currentDateTime)
    const [endTime, setEndTime] = useState(0)
    const [participants, setParticipants] = useState([])
    const [description, setDescription] = useState('')

    useEffect(() => {
        axios.get(URL)
        .then(response => {
          setEvents(response.data)
          // setStartTimeAPI(response.data[1].startTime)
            // console.log(events)
        })
    }, [URL])


    const postData = (e) => {
        e.preventDefault();
        axios.post(URL, {
            eventName,
            startTime,
            endTime,
            participants,
            description

        }).then(res => console.log('Posting Data', res)).catch(err => console.log(err))
    }

    // "?." optional chaining operator. Removes the error of an undefined. And instead just returns undefined.
    // console.log(events[0]?.eventName)
    // console.log(events.length)

    const allEvents = [];
    for (let i=0; i<events.length; i++) {
      allEvents.push(events[i].eventName)
    }
    // console.log(allEvents)

    const JulianDayConverter = {
        1: 31,
        2: 28,
        3: 31,
        4: 30,
        5: 31,
        6: 30,
        7: 31,
        8: 31,
        9: 30,
        10: 31,
        11: 30,
        12: 31
      }
  
      const JulianDayConverterLeap = {
        1: 31,
        2: 29,
        3: 31,
        4: 30,
        5: 31,
        6: 30,
        7: 31,
        8: 31,
        9: 30,
        10: 31,
        11: 30,
        12: 31
      }
        
      let convertToJulian = Object.keys(JulianDayConverter)

      // console.log(convertToJulian)


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div className='MainModalPrimaryReturn'>
      <Button variant="none" onClick={handleShow}>
        Add Event
      </Button>

      <Modal className='MainModalInsideTheModal'
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='md'
        centered
        
      >
  
        <Modal.Header closeButton>
        
          <Modal.Title><h2>Add New Event</h2></Modal.Title>
        </Modal.Header>
        
        <Modal.Body
          centered
          bg="primary"
        >

            <div className='ModalBodyContent'>
                <h3>Please enter all event fields</h3>
                <br/>
                <form>
                    <label>Event Name:  </label>
                    <input
                        type="string"
                        required
                        value={eventName}
                        placeholder="Meeting?"
                        onChange={(e)=> setEventName(e.target.value)}
                    />

                    <br/>
                    <label>Start Time:  </label>
                    <input
                        type="datetime-local"
                        required
                        value={startTime}
                        onChange={(e)=> setStartTime(e.target.value)}
                    />

                    <br/>
                    <label>End Time:  </label>
                    <input
                        type="datetime-local"
                        required
                        value={endTime}
                        onChange={(e)=> setEndTime(e.target.value)}
                    />

                    <br/>
                    <label>Participants:  </label>
                    <input
                        type="string"
                        required
                        value={participants}
                        placeholder="John Doe, Jane Doe"
                        onChange={(e)=> setParticipants(e.target.value)}
                    />

                    <br/>
                    <label>Description:  </label>
                    <input
                        type="string"
                        required
                        value={description}
                        placeholder="Enter brief description"
                        onChange={(e)=> setDescription(e.target.value)}
                    />

                    {/*
                    <br/>
                    <label>eventend</label>
                    <input
                        type="date"
                        required
                        value={event.end}
                        onChange={(e)=> setEvent({...event, end : e.target.value})}
                    />
                    
                    <br/>
                    <label>eventID</label>
                    <input
                        type="number"
                        value={event.eventID}
                        onChange={(e)=> setEvent({...event, eventID : e.target.value})}
                    />
                    */}
                    <br/><br/><br/><br/>
                    <div className='PostButton'>
                      <Button variant="none" onClick={postData}>POST</Button>
                    </div>
                    
                </form>
            </div>
            {/* 
            <p>Event Name: {eventName}</p>
            <p>Start Time: {startTime}</p>
            <p>End Time: {endTime}</p>
            <p>Participants: {participants}</p>
            <p>Description: {description}</p>
            */}
        </Modal.Body>
        <Modal.Footer>
            <div className='ModalFooterContent'>
              <Button variant="secondary" onClick={handleClose}>Close</Button>
            </div>
          
        </Modal.Footer>
      </Modal>
    </div>
  );
}
