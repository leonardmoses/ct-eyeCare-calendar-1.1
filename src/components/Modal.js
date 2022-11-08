import React, { useState, useEffect } from "react";
import axios, { Axios } from 'axios';
import {URL} from './JS/URLS';
import { currentDateTime } from "./JS/Snippets";



const Modal = ({ open, children, onClose }) => {


    let [events, setEvents] = useState('')

    const [eventName, setEventName] = useState('')
    const [startTime, setStartTime] = useState(currentDateTime)
    const [endTime, setEndTime] = useState(0)
    const [participants, setParticipants] = useState([])
    const [description, setDescription] = useState('')
    const [julianDay, setJulianDay] = useState('')



    // const [event, setEvent] = useState({
    //     eventname: '',
    //     start: '',
    //     end: '',
    //     eventID: 0
    //   })

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     const blog = {
    //     eventName, startTime, endTime, participants, description
    //     }
    //     console.log(blog)
    //  }

    useEffect(() => {
        axios.get(URL)
        .then(response => {
          setEvents(response.data)
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


    console.log(events[0])



    // for (let i=0; i<events.length; i++) {
    //   newlist.push(events)
    // }
    
    

    console.log(startTime.substring(8,10)+ startTime.substring(5,7))
    console.log(startTime.substring(11,13)+ startTime.substring(14,16))
    // console.log(endTime.substring(11,13)+ endTime.substring(14,16))

    console.log(`julianDay: `)
    console.log(julianDay)

    if (!open) return null

    return ( 
        <div className="modal_Container">
            <div className="modal_Overlay">
                <div className="modal">
                    <div>
                        <h3>Testing POST Request</h3>
                        <br/>
                        <form>
                            <label>Event Name: </label>
                            <input
                              type="string"
                              required
                              value={eventName}
                              onChange={(e)=> setEventName(e.target.value)}
                            />

                            <br/>
                            <label>Start Time: </label>
                            <input
                              type="datetime-local"
                              required
                              value={startTime}
                              onChange={(e)=> setStartTime(e.target.value)}
                            />

                            <br/>
                            <label>End Time: </label>
                            <input
                              type="datetime-local"
                              required
                              value={endTime}
                              onChange={(e)=> setEndTime(e.target.value)}
                            />

                            <br/>
                            <label>Participants</label>
                            <input
                              type="string"
                              value={participants}
                              onChange={(e)=> setParticipants(e.target.value)}
                            />

                            <br/>
                            <label>Description</label>
                            <input
                              type="string"
                              value={description}
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
                            <br/><br/>
                            <button onClick={postData}>POST</button>
                        </form>
                    </div>
                    <br/><br/>

                    <p>Event Name: {eventName}</p>
                    <p>Start Time: {startTime}</p>
                    <p>End Time: {endTime}</p>
                    <p>Participants: {participants}</p>
                    <p>Description: {description}</p>

                    <br/><br/>
                    <button onClick={onClose}>Close Modal</button>
                    <br/><br/>
                    
                    
                    {children}
                </div>
            </div>

        </div>
     );
}
 
export default Modal;