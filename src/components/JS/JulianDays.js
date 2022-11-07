import React, {useState, useEffect, useRef} from "react";
import Year from "./Year";

import { currentDate, firstDayOfYear, dec1PrevYear, Feb1NextYear, Jan31NextYear, totalYearDays, dec1Padding, Jan31Padding, year, isLeapYear, leapDay, LeapYearCheck} from "./SetDate";

import {dec1PrevYearDays, currentYearDays, Jan31NextYearDays, dec1paddingInitial, jan31paddingInitial, dayProperty} from './GeneratingDays'

const JulianDays = (props) => {

    // // Testing changing the days when changing the years 
    // let year = Year().props.children.props.children[1].props.children;
    // console.log(year)
    // console.log(new Date(`Jan 1, ${year}`))




 
    
    const [events, setEvents] = useState(null)

    // console.log(props.URL)



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
                return(
                    <div key={index} className="current-year-days">
                        <h6 className="julianCount">({day.julianCount})</h6>
                        <div className="monthCount">
                            <h6>{day.monthShort}</h6>
                            <h6>{day.monthCount}</h6>
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