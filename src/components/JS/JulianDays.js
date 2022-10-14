import React, {useState, useEffect, useRef} from "react";


const JulianDays = () => {

    // #region setting the Date and Initial Variables
    // Set date to current date
    let currentDate = new Date();
    // let currentDate = new Date('Dec 29, 1984');
    let firstDayOfYear = new Date(currentDate.getFullYear(), 0)
    let dec1PrevYear = new Date(currentDate.getFullYear(), -1)
    let Feb1NextYear = new Date(currentDate.getFullYear(), +13);
    let Jan31NextYear = Feb1NextYear.getDay()-1;
    let totalYearDays = 365;
    let dec1Padding = dec1PrevYear.getDay()
    let Jan31Padding = 6-Jan31NextYear;

    console.log(`${currentDate} ---- Today`)
    console.log(`${firstDayOfYear} ---- Jan 1 This Year`)
    // console.log(`${dec1PrevYear} ---- Prev Year Dec1`)
    console.log(`${dec1PrevYear.getDay()} ---- Dec1 Day of Week`)
    console.log(`${Jan31NextYear} ---- Jan31 Day of Week`)
    console.log(`${Jan31Padding} ---- Jan 31 Padding Days`)
    // #endregion setting the Date and Initial Variables

    // #region Leap Year Check
function LeapYearCheck() {
    const year = currentDate.getFullYear()
    // const year = 2020;
    console.log(`Current year: ${year}`)
    let isLeapYear = false;
    
    if (year % 4 === 0)  {
        isLeapYear = true;
    } else if (year % 100 === 4) {
        isLeapYear = true;
    } else {
        isLeapYear = false;
    }
    console.log(`Leap Year: ${isLeapYear}`)
    
    if (isLeapYear) {
        totalYearDays = 366;
    } else {
        totalYearDays = 365
    };
    console.log(`Total Days = ${totalYearDays}`)
    }
    LeapYearCheck()
// #endregion

    // #region Generating Days

    const dec1PrevYearDays = [];
    const currentYearDays = [];
    const Jan31NextYearDays = [];
    const dec1paddingInitial = [];
    const jan31paddingInitial = [];

    for (let i=1; i<=dec1Padding ; i++) {
        dec1paddingInitial.push(i);
    }

    for (let i=1; i<=31 ; i++) {
        dec1PrevYearDays.push(i);
    }

    for (let i=1; i<=365; i++) {
        currentYearDays.push(i);
    }

    for (let i=1; i<=31 ; i++) {
        Jan31NextYearDays.push(i);
    }

    for (let i=1; i<=Jan31Padding ; i++) {
        jan31paddingInitial.push(i);
    }

    // console.log(dec1PrevYearDays)
    // console.log(currentYearDays)

    // #endregion Generating Days

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
                        {day}
                    </div>
                )
            })}

            {currentYearDays.map((day, index) => {
                return(
                    <div key={index} className="current-year-days">
                        {day}
                    </div>
                )
            })}

            {Jan31NextYearDays.map((day, index) => {
                return (
                    <div key={index} className="next-year-days">
                        {day}
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