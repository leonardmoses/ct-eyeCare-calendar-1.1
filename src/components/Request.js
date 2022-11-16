import React, { useState, useEffect } from "react";
import axios from 'axios';



const Request = (props) => {

    let events = props.events
    
    let content = null
    let data = null

    const allEvents = {
      events
    }

    // console.log(events)

        if(props.events) {
          return (

            <div>

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