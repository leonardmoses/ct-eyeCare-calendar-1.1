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
  // const URL2 = 'https://6350235ddf22c2af7b64a794.mockapi.io/api/v1/events'
// #endregion

    const [events, setEvents] = useState(null)

    let content = null
    let data = null

    const fetchData = async () => {
      try {
        const response = await axios(URL);
        setEvents(response.data)
        console.log(events)

      } catch (error) {
        console.log(error.response);
      }

    };

    

    useEffect(() => {
      fetchData();
    }, []);

        if(events) {
          return (

            <div>
              <h1>{`${events[0].monthCount}`}</h1>
              <h1>{events[0].month}</h1>
              <h1>{events[0].julianCount}</h1>
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