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


    let content = null


      useEffect(() => {
        axios.get(URL)
        .then(response => {
          setEvents(response.data)
            console.log(events)
        })

        

      }, [URL])


        if(events) {
          return (

            <div>
                <h1>Testing Get Request</h1>
                <h1>Event Name: {events[1].eventname}</h1>
                <h1>Start Date: {events[1].start}</h1>
                <h1>End Date: {events[1].end}</h1>
                <h1>Event Creator: {events[1].createdby}</h1>
                <h1>Participants: {events[1].participants}</h1>
                <h1>Details: {events[1].details}</h1>
            </div>

          )
        }


    return ( 
        <div>
            <h1>Loading...</h1>
            {content}
        </div>
     );
}
 
export default Request;