import React, {useState, useEffect, useRef, createElement} from "react";
import Year from "./Year";

import { currentDate, firstDayOfYear, dec1PrevYear, Feb1NextYear, Jan31NextYear, totalYearDays, dec1Padding, Jan31Padding, year, isLeapYear, leapDay, LeapYearCheck} from "./JS/SetDate";

import {dec1PrevYearDays, currentYearDays, Jan31NextYearDays, dec1paddingInitial, jan31paddingInitial, dayProperty} from './JS/GeneratingDays'
import axios from "axios";

const JulianDays = (props) => {

    // // Testing changing the days when changing the years 
    // let year = Year().props.children.props.children[1].props.children;
    // console.log(year)
    // console.log(new Date(`Jan 1, ${year}`))

    
    const [events, setEvents] = useState('')

    const fetchData = async () => {
        try {
            const response = await axios(props.URL);
            setEvents(response.data)
        } catch (error) {
            console.log(error.response)
        }
    };

    useEffect(() => {
        fetchData();
    }, []);



    const JulianConverterKey = {
        1: 0,
        2: 31,
        3: 59,
        4: 90,
        5: 120,
        6: 151,
        7: 181,
        8: 212,
        9: 243,
        10: 273,
        11: 304,
        12: 334
      }
  
      const JulianConverterKeyLeap = {
        1: 0,
        2: 31,
        3: 60,
        4: 91,
        5: 121,
        6: 152,
        7: 182,
        8: 213,
        9: 244,
        10: 274,
        11: 305,
        12: 335
      }



    let startTimeJulianDays = []
    let startTimeJulianDay = ''
    let startTimeMonth = ''
    let startTimeDay = ''
    let startTimeMonthToJulianDayPrev = ''

    // Adds julian days as new object property to events
    for (let i=0; i<events.length; i++) {
        //gets just the month number
        startTimeMonth = events[i].startTime.substring(5,7);

        // Checks for leap year and uses appropriate julianConverterKey
        if (!isLeapYear) {
            //converts the month number to julian count of last day of previous month
            startTimeMonthToJulianDayPrev = JulianConverterKey[startTimeMonth];
        } else {
            startTimeMonthToJulianDayPrev = JulianConverterKeyLeap[startTimeMonth];
        }

        //gets just the day number of the month
        startTimeDay = events[i].startTime.substring(8,10);

        // takes last day of prev month and adds event's day of month, resulting in event's julian day
        startTimeJulianDay = parseInt(startTimeMonthToJulianDayPrev) + parseInt(startTimeDay)

        // takes event's julian day and adds it as a new object property to event 
        events[i].startTimeJulianDay = startTimeJulianDay

        // console.log(startTimeJulianDay)
    }

    let endTimeJulianDay = ''
    let endTimeMonth = ''
    let endTimeDay = ''
    let endTimeMonthToJulianDayPrev = ''

    for (let i=0; i<events.length; i++) {
        //gets just the month number
        endTimeMonth = events[i].endTime.substring(5,7);

        // Checks for leap year and uses appropriate julianConverterKey
        if (!isLeapYear) {
            //converts the month number to julian count of last day of previous month
            endTimeMonthToJulianDayPrev = JulianConverterKey[endTimeMonth];
        } else {
            endTimeMonthToJulianDayPrev = JulianConverterKeyLeap[endTimeMonth];
        }

        //gets just the day number of the month
        endTimeDay = events[i].endTime.substring(8,10);

        // takes last day of prev month and adds event's day of month
        endTimeJulianDay = parseInt(endTimeMonthToJulianDayPrev) + parseInt(endTimeDay)

        // takes event's julian day and adds it as a new object property to event
        events[i].endTimeJulianDay = endTimeJulianDay

        // console.log(endTimeJulianDay)
    }

    // console.log(events)


    return ( 
        <div className="julianDaysComponent"> 


            {dec1paddingInitial.map((day, index) => {
                return (
                    <div key={index} className="prev-year-padding">
                        {day}
                    </div>
                )
            })}

            {dec1PrevYearDays.map((day, index) => {
                return (
                    <div key={index} className="prev-year-days">
                        <h6>{day}</h6>
                    </div>
                )
            })}

            {currentYearDays.map((day, index) => {
                // Ror each day displayed, create a new object property of an empty array
                day.eventDisplay = []
                
                // loop through all the events in the API
                for (let i=0; i<=events.length; i++) {
                    
                    // If both Julian days match
                    if (events[i]?.startTimeJulianDay == day.julianCount) {
                        // push event name into the day's empty array 
                        day.eventDisplay.push(events[i]?.eventName)
                        
                        
                        // for (let i=0; i<day.eventDisplay.length; i++) {
                            
                        // }

                    } else {
                        // do nothing
                    }
                };
                console.log(day)
                return(
                    <div key={index} className="current-year-days">
                        <h6 className="julianCount">({day.julianCount})</h6>

                        <div className="monthCount">
                            <h6>{day.monthShort}</h6>
                            <h6>{day.monthCount}</h6>
                        </div>
                        
                        <div className="eventDisplay">
                          
                            <div>
                                {day.eventDisplay}
                            </div>
                        </div>

                    </div>
                )
            })}

            {Jan31NextYearDays.map((day, index) => {
                return (
                    <div key={index} className="next-year-days">
                        <h6>{day}</h6>
                    </div>
                )
            })}

            {jan31paddingInitial.map((day, index) => {
                return (
                    <div key={index} className="next-year-padding">
                        {day}
                    </div>
                )
            })}

        </div> 

     ); //Close for Component's Main  Return

     
} // Close for Entire Component Function
 
export default JulianDays;