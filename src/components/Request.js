import React, { useState, useEffect } from "react";
import axios from 'axios';



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
                <h1>{events[0].details}</h1>
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