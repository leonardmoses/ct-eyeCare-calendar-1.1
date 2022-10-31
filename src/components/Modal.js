import React, { useState, useEffect } from "react";
import axios, { Axios } from 'axios';



const Modal = ({ open, children, onClose }) => {

    const URL = 'https://6350235ddf22c2af7b64a794.mockapi.io/api/v1/events'

    const [events, setEvents] = useState(null)

    const [start, setStart] = useState()
    const [end, setEnd] = useState()
    const [participants, setParticipants] = useState('')
    const [createdby, setCreatedby] = useState('')
    const [eventname, setEventname] = useState('')
    const [details, setDetails] = useState('')
    const [dayID, setDayID] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = {start, end, participants, createdby, eventname, details, dayID}
 
        console.log(blog)
     }

    useEffect(() => {
        axios.get(URL)
        .then(response => {
          setEvents(response.data)
            console.log(events)
        })
    }, [URL])


    const postData = (e) => {
        e.preventDefault();
        axios.post(URL, {
            start,
            end,
            participants,
            createdby,
            eventname,
            details,
            dayID
        }).then(res => console.log('Posting Data', res)).catch(err => console.log(err))
    }

    if (!open) return null

    return ( 
        <div className="modal_Container">
            <div className="modal_Overlay">
                <div className="modal">
                    <div>
                        <h3>Testing POST Request</h3>
                        <br/>
                        <form>
                            <label>start</label>
                            <input
                            type="date"
                            required
                            value={start}
                            onChange={(e)=> setStart(e.target.value)}
                            />
                            <br/>
                            <label>end</label>
                            <input
                              type="date"
                              required
                              value={end}
                              onChange={(e)=> setEnd(e.target.value)}
                            />
                            <br/>
                            <label>participants</label>
                            <input
                              type="text"
                              value={participants}
                              onChange={(e)=> setParticipants(e.target.value)}
                            />
                            <br/>
                            <label>createdby</label>
                            <input
                              type="text"
                              value={createdby}
                              onChange={(e)=> setCreatedby(e.target.value)}
                            />
                            <br/>
                            <label>eventname</label>
                            <input 
                              type="text"
                              value={eventname} 
                              onChange={(e) => setEventname(e.target.value)}
                            />
                            <br/>
                            <label>details</label>
                            <input
                              type="text"
                              value={details}
                              onChange={(e)=> setDetails(e.target.value)}
                            />
                            <br/>
                            <label>dayID</label>
                            <input
                              type="number"
                              value={dayID}
                              onChange={(e)=> setDayID(e.target.value)}
                            />

                            <br/><br/>
                            <button onClick={postData}>POST</button>
                        </form>
                    </div>
                    <br/><br/>
                    <p>start: {start}</p>
                    <p>end: {end}</p>
                    <p>Participants: {participants}</p>
                    <p>createdby: {createdby}</p>
                    <p>eventname: {eventname}</p>
                    <p>details: {details}</p>
                    <p>dayID: {dayID}</p>
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