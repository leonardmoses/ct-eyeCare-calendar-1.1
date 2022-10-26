import React, { useState, useEffect } from "react";
import axios, { Axios } from 'axios';



const Request = () => {

  // #region URLS
  // const URL = `https://reqres.in/api/users`
  // const URL = 'https://reqres.in/api/users/2'
  // const URL = "https://contrivia-backend.herokuapp.com/trivia";
  // const URL = 'https://see-care-php-7-4-kevincranmer180966.codeanyapp.com/see-care-php-7.4/staff/calendar/querypage.php'
  // const URL = 'https://see-care.com/caljsontest.php'
  // const URL = 'https://date.nager.at/api/v2/publicholidays/2020/GB'
  // const URL = 'http://localhost:4000/publicholidays/2020/GB'
  // const URL = 'http://localhost:4000/see-care-php-7.4/staff/calendar/querypage.php'
  const URL = 'https://6350235ddf22c2af7b64a794.mockapi.io/api/v1/events'
  // const URL2 = 'https://6350235ddf22c2af7b64a794.mockapi.io/api/v1/events'
// #endregion

    const [events, setEvents] = useState(null)

    const [start, setStart] = useState()
    const [end, setEnd] = useState()
    const [participants, setParticipants] = useState('')
    const [createdby, setCreatedby] = useState('')
    const [eventname, setEventname] = useState('')
    const [details, setDetails] = useState('')

    const handleSubmit = (e) => {
       e.preventDefault()
       const blog = {start, end, participants, createdby, eventname, details}

       console.log(blog)
    }

    let content = null


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
          details
        }).then(res => console.log('Posting Data', res)).catch(err => console.log(err))
      }


  

        if(events) {
          return (
            <div>
                <h1>Event Name: {events[1].eventname}</h1>
                <h1>Start Date: {events[1].start}</h1>
                <h1>End Date: {events[1].end}</h1>
                <h1>Event Creator: {events[1].createdby}</h1>
                <h1>Participants: {events[1].participants}</h1>
                <h1>Details: {events[1].details}</h1>

                <br/><br/>

                <form onSubmit={handleSubmit}>
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

                  <br/><br/>

                  <button onClick={postData}>POST</button>
                </form>
                
                <br/>
                <br/>
                <p>start: {start}</p>
                <p>end: {end}</p>
                <p>Participants: {participants}</p>
                <p>createdby: {createdby}</p>
                <p>eventname: {eventname}</p>
                <p>details: {details}</p>
                
          </div>

          )
        }


    return ( 
        <div>
            <h1>Testing Requests:</h1>
            {content}
        </div>
     );
}
 
export default Request;