import React, { useState, useEffect } from "react";
import axios from 'axios';



const Request = (props) => {



    const [events, setEvents] = useState(null)

    let content = null
    let data = null

    const fetchData = async () => {
      try {
        const response = await axios(props.URL);
        setEvents(response.data)
        // console.log(events)

      } catch (error) {
        console.log(error.response);
      }

    };

    

    useEffect(() => {
      fetchData();
    }, []);

    const allEvents = {
      events
    }

    console.log(events)

        if(events) {
          return (

            <div>
              <h1>{`${events[0].eventName}`}</h1>
              <h1>{events[0].startTime}</h1>
              <h1>{events[0].endTime}</h1>
              <h1>{events[0].participants}</h1>
              <h1>{events[0].description}</h1>
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