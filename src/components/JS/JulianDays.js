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

    return ( 
        <div ref={allDaysRef} className="julianDaysComponent"> 

            <div className="prev-year-days">27</div>
            <div className="prev-year-days">28</div>
            <div className="prev-year-days">29</div>
            <div className="prev-year-days">30</div>
            <div className="prev-year-days">31</div>

            <div className="current-year-days">1</div>
            <div className="current-year-days">2</div>
            <div className="current-year-days">3</div>
            <div className="current-year-days">4</div>
            <div className="current-year-days">5</div>
            <div className="current-year-days">6</div>
            <div className="current-year-days">7</div>
            <div className="current-year-days">8</div>
            <div className="current-year-days">365</div>
            <div className="current-year-days">1</div>
            <div className="current-year-days">2</div>
            <div className="current-year-days">3</div>
            <div className="current-year-days">4</div>
            <div className="current-year-days">5</div>
            <div className="current-year-days">6</div>
            <div className="current-year-days">7</div>
            <div className="current-year-days">8</div>
            <div className="current-year-days">365</div>
            <div className="current-year-days">1</div>
            <div className="current-year-days">2</div>
            <div className="current-year-days">3</div>
            <div className="current-year-days">4</div>
            <div className="current-year-days">5</div>
            <div className="current-year-days">6</div>
            <div className="current-year-days">7</div>
            <div className="current-year-days">8</div>
            <div className="current-year-days">365</div>

            <div className="next-year-days">1</div>
            <div className="next-year-days">2</div>
            <div className="next-year-days">3</div>
            <div className="next-year-days">4</div>
            <div className="next-year-days">5</div>
            <div className="next-year-days">6</div>

        </div> 

     ); //Close for Component's Main  Return

     
} // Close for Entire Component Function
 
export default JulianDays;