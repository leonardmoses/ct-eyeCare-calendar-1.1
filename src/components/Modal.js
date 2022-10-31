import React, { useState, useEffect } from "react";
import axios, { Axios } from 'axios';



const Modal = ({ open, children, onClose }) => {

    const URL = 'https://6350235ddf22c2af7b64a794.mockapi.io/api/v1/events'

    const [events, setEvents] = useState(null)

    // const [start, setStart] = useState()
    // const [end, setEnd] = useState()
    // const [participants, setParticipants] = useState('')
    // const [createdby, setCreatedby] = useState('')
    // const [eventname, setEventname] = useState('')
    // const [details, setDetails] = useState('')
    // const [dayID, setDayID] = useState(null)

    const [monthCount, setMonthCount] = useState(0)
    const [month, setMonth] = useState(0)
    const [julianCount, setJulianCount] = useState(0)
    const [event, setEvent] = useState({
        eventname: '',
        start: '',
        end: '',
        eventID: 0
      })

    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = {
        // start, end, participants, createdby, eventname, details, dayID
        monthCount, month, julianCount, event
        }
 
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
            // start,
            // end,
            // participants,
            // createdby,
            // eventname,
            // details,
            // dayID

            monthCount,
            month,
            julianCount,
            event
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
                           {/* 
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
                            */}

                            <br/>
                            <label>monthCount</label>
                            <input
                              type="number"
                              value={monthCount}
                              onChange={(e)=> setMonthCount(e.target.value)}
                            />
                            
                            <br/>
                            <label>month</label>
                            <input
                              type="number"
                              value={month}
                              onChange={(e)=> setMonth(e.target.value)}
                            />

                            <br/>
                            <label>julianCount</label>
                            <input
                              type="number"
                              value={julianCount}
                              onChange={(e)=> setJulianCount(e.target.value)}
                            />

                            <br/>
                            <label>eventname</label>
                            <input
                              type="string"
                              value={event.eventname}
                              onChange={(e)=> setEvent({...event, eventname: e.target.value})}
                            />

                            <br/>
                            <label>eventstart</label>
                            <input
                              type="date"
                              value={event.start}
                              onChange={(e)=> setEvent({...event, start : e.target.value})}
                            />

                            <br/>
                            <label>eventend</label>
                            <input
                              type="date"
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

                            <br/><br/>
                            <button onClick={postData}>POST</button>
                        </form>
                    </div>
                    <br/><br/>
                    {/*
                    <p>start: {start}</p>
                    <p>end: {end}</p>
                    <p>Participants: {participants}</p>
                    <p>createdby: {createdby}</p>
                    <p>eventname: {eventname}</p>
                    <p>details: {details}</p>
                    <p>dayID: {dayID}</p>
                    */}

                    <p>monthCount: {monthCount}</p>
                    <p>month: {month}</p>
                    <p>julianCount: {julianCount}</p>
                    <p>eventname: {event.eventname}</p>
                    <p>eventstart: {event.start}</p>
                    <p>eventend: {event.end}</p>
                    <p>eventID: {event.eventID}</p>

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