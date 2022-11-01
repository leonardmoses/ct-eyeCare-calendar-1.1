import React, {useState, useEffect, useRef} from "react";
import Year from "./Year";

const JulianDays = () => {

    // // Testing changing the days when changing the years 
    // let year = Year().props.children.props.children[1].props.children;
    // console.log(year)
    // console.log(new Date(`Jan 1, ${year}`))


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
    let year = currentDate.getFullYear()
    let isLeapYear = false;
    let leapDay = 28

    console.log(`${currentDate} ---- Today`)
    console.log(`${firstDayOfYear} ---- Jan 1 This Year`)
    // console.log(`${dec1PrevYear} ---- Prev Year Dec1`)
    console.log(`${dec1PrevYear.getDay()} ---- Dec1 Day of Week`)
    console.log(`${Jan31NextYear} ---- Jan31 Day of Week`)
    console.log(`${Jan31Padding} ---- Jan 31 Padding Days`)
    console.log(`Current year: ${year}`)
    // #endregion setting the Date and Initial Variables

    // #region Leap Year Check
function LeapYearCheck() {
    
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

    
    if (isLeapYear === false) {
        leapDay = 28
    } else {
        leapDay = 29
    }

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

    // #region currentYearDay Generator

    let dayProperty = {julianCount: 0, monthCount: 0, month: ''}

    // let currentYearDays = []
    let JanuaryDays = []
    let FebruaryDays = []
    let MarchDays = []
    let AprilDays = []
    let MayDays = []
    let JuneDays = []
    let JulyDays = []
    let AugustDays = []
    let SeptemberDays = []
    let OctoberDays = []
    let NovemberDays = []
    let DecemberDays = []

    const currentYearGenerator = () => {
        //January Day Generator
        for (let i=1; i<=31; i++) {
            const property = {...dayProperty, julianCount: i, monthCount: i, month: 'January'}
            JanuaryDays.push(property)
        }
        //February Day Generator
        for (let i=1; i<=leapDay; i++) {
            const property = {...dayProperty, julianCount: i + JanuaryDays[JanuaryDays.length -1].julianCount, monthCount: i, month: 'February'}
            FebruaryDays.push(property)
        }
        //March Day Generator
        for (let i=1; i<=31; i++) {
            const property = {...dayProperty, julianCount: i + FebruaryDays[FebruaryDays.length -1].julianCount, monthCount: i, month: 'March'}
            MarchDays.push(property)
        }
        //April Day Generator
        for (let i=1; i<=30; i++) {
            const property = {...dayProperty, julianCount: i + MarchDays[MarchDays.length -1].julianCount, monthCount: i, month: 'April'}
            AprilDays.push(property)
        }
        //May Day Generator
        for (let i=1; i<=31; i++) {
            const property = {...dayProperty, julianCount: i + AprilDays[AprilDays.length -1].julianCount, monthCount: i, month: 'May'}
            MayDays.push(property)
        }
        //June Day Generator
        for (let i=1; i<=30; i++) {
            const property = {...dayProperty, julianCount: i + MayDays[MayDays.length -1].julianCount, monthCount: i, month: 'June'}
            JuneDays.push(property)
        }
        //July Day Generator
        for (let i=1; i<=31; i++) {
            const property = {...dayProperty, julianCount: i + JuneDays[JuneDays.length -1].julianCount, monthCount: i, month: 'July'}
            JulyDays.push(property)
        }
        //August Day Generator
        for (let i=1; i<=31; i++) {
            const property = {...dayProperty, julianCount: i + JulyDays[JulyDays.length -1].julianCount, monthCount: i, month: 'August'}
            AugustDays.push(property)
        }
        //September Day Generator
        for (let i=1; i<=30; i++) {
            const property = {...dayProperty, julianCount: i + AugustDays[AugustDays.length -1].julianCount, monthCount: i, month: 'September'}
            SeptemberDays.push(property)
        }
        //October Day Generator
        for (let i=1; i<=31; i++) {
            const property = {...dayProperty, julianCount: i + SeptemberDays[SeptemberDays.length -1].julianCount, monthCount: i, month: 'October'}
            OctoberDays.push(property)
        }
        //November Day Generator
        for (let i=1; i<=30; i++) {
            const property = {...dayProperty, julianCount: i + OctoberDays[OctoberDays.length -1].julianCount, monthCount: i, month: 'November'}
            NovemberDays.push(property)
        }
        //December Day Generator
        for (let i=1; i<=31; i++) {
            const property = {...dayProperty, julianCount: i + NovemberDays[NovemberDays.length -1].julianCount, monthCount: i, month: 'December'}
            DecemberDays.push(property)
        }
        //Pushing Each Months Days to the whole year
        currentYearDays.push(
            ...JanuaryDays, 
            ...FebruaryDays,
            ...MarchDays,
            ...AprilDays,
            ...MayDays,
            ...JuneDays,
            ...JulyDays,
            ...AugustDays,
            ...SeptemberDays,
            ...OctoberDays,
            ...NovemberDays,
            ...DecemberDays
            )
    }
    currentYearGenerator()

    // console.log(`JanuaryDays:`)
    // console.log(JanuaryDays)
    // console.log(`FebruaryDays:`)
    // console.log(FebruaryDays)
    // console.log(`MarchDays:`)
    // console.log(MarchDays)
    // console.log(`AprilDays:`)
    // console.log(AprilDays)
    // console.log(`MayDays:`)
    // console.log(MayDays)
    // console.log(`JuneDays:`)
    // console.log(JuneDays)
    // console.log(`JulyDays:`)
    // console.log(JulyDays)
    // console.log(`AugustDays:`)
    // console.log(AugustDays)
    // console.log(`SeptemberDays:`)
    // console.log(SeptemberDays)
    // console.log(`OctoberDays:`)
    // console.log(OctoberDays)
    // console.log(`NovemberDays:`)
    // console.log(NovemberDays)
    // console.log(`DecemberDays:`)
    // console.log(DecemberDays)

    console.log(`Entire year Days: `)
    console.log(currentYearDays)

    // #endregion currentYearDay Generator

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
                        <h6>{day}</h6>
                    </div>
                )
            })}
    
    
            {currentYearDays.map((day, index) => {
                return(
                    <div key={index} className="current-year-days">
                        <h6 className="julianCount">{day.julianCount}</h6>
                        <div className="monthCount">
                            <h6>{day.month}</h6>
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