import React, {useState, useEffect, useRef} from "react";


const JulianDays = () => {

    // #region setting the Date and Initial Variables
    // Set date to current date
    let currentDate = new Date();
    // let currentDate = new Date('Dec 29, 1984');
    let firstDayOfYear = new Date(currentDate.getFullYear(), 0)
    let dec1PrevYear = new Date(currentDate.getFullYear(), -1)
    let totalYearDays = 365;
    let dec1Padding = dec1PrevYear.getDay()

    console.log(currentDate)
    console.log(firstDayOfYear)
    console.log(dec1PrevYear)
    console.log(dec1PrevYear.getDay())
    // console.log(dec1Padding)
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
    


    function setDaysOfYear() {
        const monthDays = document.querySelector('.julianDaysComponent');
        console.log(monthDays)
        
        let days = "";
        
        for (let i = 1; i<= dec1Padding; i++) {
            days += `<div className='prev-year-padding'>${i}</div>`;
            monthDays.innerHTML = days;
        }
        
        for (let i = 1; i<= 31; i++) {
            days += `<div className='prev-year-days'>${i}</div>`;
            monthDays.innerHTML = days;
        }
        
        for (let i = 1; i<= totalYearDays; i++) {
            days += `<div className='current-year-days'>${i}</div>`;
            monthDays.innerHTML = days;
        }
        
        for (let i = 1; i<= 31; i++) {
            days += `<div className='prev-year-days'>${i}</div>`;
            monthDays.innerHTML = days;
        }
    }

// function setMonthDays() {
//     const monthDays = document.querySelector('.julianDaysComponent');
//     console.log(monthDays)
// }

    const allDaysRef = useRef();

    const SetAllDays = () => {

        let monthDays = allDaysRef.current.innerHTML;
        let days = "";

        for (let i = 1; i<= 31; i++) {
            days += `<div className='prev-year-padding'>${i}</div>`;
            monthDays.innerHTML = days;
        }
        console.log(days)
        
    }

    // const RenderAllDays = () => {
    //     return (

    //     )
    // };

    // SetAllDays();

    // useEffect(() => SetAllDays(), []);

    const thirtyOneDdays = [];
    const threeSixtyFiveDays = [];
    const paddingInitial = [];

    for (let i=1; i<=dec1Padding ; i++) {
        paddingInitial.push(i);
    }

    for (let i=1; i<=31 ; i++) {
        thirtyOneDdays.push(i);
    }

    for (let i=1; i<=365; i++) {
        threeSixtyFiveDays.push(i);
    }

    console.log(thirtyOneDdays)
    console.log(threeSixtyFiveDays)

    return ( 
        <div ref={allDaysRef} className="julianDaysComponent"> 

            {paddingInitial.map((day, index) => {
                return (
                    <div key={index} className="prev-year-padding">
                        {day}
                    </div>
                )
            })}

            {thirtyOneDdays.map((day, index) => {
                return (
                    <div key={index} className="prev-year-days">
                        {day}
                    </div>
                )
            })}

            {threeSixtyFiveDays.map((day, index) => {
                return(
                    <div key={index} className="current-year-days">
                        {day}
                    </div>
                )
            })}

        </div> 

     ); //Close for Component's Main  Return

     
} // Close for Entire Component Function
 
export default JulianDays;