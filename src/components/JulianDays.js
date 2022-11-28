import React, {useState, useEffect, useRef, createElement} from "react";
import Year from "./Year";
import { currentDate, firstDayOfYear, dec1PrevYear, Feb1NextYear, Jan31NextYear, totalYearDays, dec1Padding, Jan31Padding, year, isLeapYear, leapDay, LeapYearCheck} from "./JS/SetDate";
import {dec1PrevYearDays, currentYearDays, Jan31NextYearDays, dec1paddingInitial, jan31paddingInitial, dayProperty} from './JS/GeneratingDays';
import {JulianConverterKey, JulianConverterKeyLeap} from './JS/Snippets';
import axios from "axios";
import EventModal from "./EventModal";



const JulianDays = (props) => {

    // #region Adds julian days as new object property to events
    const addJulianDaysObjectProperty = () => {
        let startTimeJulianDay = ''
        let startTimeMonth = ''
        let startTimeDay = ''
        let startTimeMonthToJulianDayPrev = ''
        let endTimeJulianDay = ''
        let endTimeMonth = ''
        let endTimeDay = ''
        let endTimeMonthToJulianDayPrev = ''
        
        // loops through each event to convert startTime
        for (let i=0; i<props.events.length; i++) {
            //gets just the month number
            startTimeMonth = props.events[i].startTime.substring(5,7);
            // console.log(props.events[i])

            // Checks for leap year and uses appropriate julianConverterKey
            if (!isLeapYear) {
                //converts the month number to julian count of last day of previous month
                startTimeMonthToJulianDayPrev = JulianConverterKey[startTimeMonth];
            } else {
                startTimeMonthToJulianDayPrev = JulianConverterKeyLeap[startTimeMonth];
            }

            //gets just the day number of the month
            startTimeDay = props.events[i].startTime.substring(8,10);
    
            // takes last day of prev month and adds event's day of month, resulting in event's julian day
            startTimeJulianDay = parseInt(startTimeMonthToJulianDayPrev) + parseInt(startTimeDay)
            
            // takes event's julian day and adds it as a new object property to event 
            props.events[i].startTimeJulianDay = startTimeJulianDay
        }
    
        // loops through each event to convert endTime
        for (let i=0; i<props.events.length; i++) {
            //gets just the month number
            endTimeMonth = props.events[i].endTime.substring(5,7);
    
            // Checks for leap year and uses appropriate julianConverterKey
            if (!isLeapYear) {
                //converts the month number to julian count of last day of previous month
                endTimeMonthToJulianDayPrev = JulianConverterKey[endTimeMonth];
            } else {
                endTimeMonthToJulianDayPrev = JulianConverterKeyLeap[endTimeMonth];
            }
    
            //gets just the day number of the month
            endTimeDay = props.events[i].endTime.substring(8,10);

            // takes last day of prev month and adds event's day of month
            endTimeJulianDay = parseInt(endTimeMonthToJulianDayPrev) + parseInt(endTimeDay)
    
            // takes event's julian day and adds it as a new object property to event
            props.events[i].endTimeJulianDay = endTimeJulianDay
        }
    }
    addJulianDaysObjectProperty()
    // #endregion

    // #region Creates a new event property, dateRangeJulian and pushes all the range of the start to end dates into it
    for (let i=0; i<props.events.length; i++) {

        props.events[i].dateRangeJulian = []
        props.events[i].dateRangeJulianLength = props.events[i].endTimeJulianDay - props.events[i].startTimeJulianDay

        for (let j=0; j<=props.events[i].dateRangeJulianLength; j++) {
            props.events[i].dateRangeJulian.push(props.events[i].startTimeJulianDay++)
        }
    }
    // #endregion
    // console.log(props.events)

    return (  // Main JulianDays.js Return
        
        <> 

            {dec1paddingInitial.map((day, index) => {
                return (
                    <div key={index} className="prev-year-padding" id="top-of-cal">
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
                // For each day displayed, create a new object property of an empty array
                day.events = []

                // loop through all the events in the API
                for (let i=0; i<=props.events.length; i++) {

                    // If the 2 julian days match (The Day's julian count is within the array of the event's julian range (start date to end date))
                    if ( props.events[i]?.dateRangeJulian.includes(day.julianCount) ) {
                        // push event name into the day's empty array 
                        day.events.push(props.events[i])

                    } else {
                        // do nothing
                    }
                };

                // Adds another object property to each day called monthShortNum and gives it the Month(short) and date in one string.
                day.monthShortNum = day.monthShort+day.monthCount
                // console.log(day)

                const consolelog = () => {
                    console.log(day)
                }

                return(
                    <div key={index} className="current-year-days" id={day.monthShort} data-monthshortnumber={day.monthShortNum} onClick={consolelog}>

                        <div id={day.monthShortNum}>
                        
                            <h6 className="julianCount">({day.julianCount})</h6>

                            <div className="monthCount">
                                <h6>{day.monthShort}</h6>
                                <h6>{day.monthCount}</h6>
                            </div>

                            <div className="allEventsInDay">

                                {day.events.map((event , index)  => {
                                    const showTest = () => {
                                        // console.log(event.eventName)
                                        // console.log(event.description)
                                        // console.log(day.event[0]._id)
                                    }

                                return (
                                    <div key={index} className="eventName" onClick={showTest}>
                                        
                                        <EventModal 
                                        events={props.events}
                                        setEvents={props.setEvents}
                                        event={event}
                                        URL={props.URL}
                                        eventName={event.eventName} 
                                        id={event._id}
                                        eventStart={event.startTime}
                                        eventEnd={event.endTime}
                                        eventParticipants={event.participants}
                                        eventDescription={event.description}
                                        />
                                        
                                    </div>
                                )
                                })}

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
                    <div key={index} className="next-year-padding" id="bottom-of-cal">
                        {day}
                    </div>
                )
            })}

        </> 

     ); // Close Main JulianDays.js Return

} // Close for Entire Component Function
 
export default JulianDays;