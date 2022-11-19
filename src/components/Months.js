import React, {useState, useEffect, useRef, createElement} from "react";

const months = [
    'December',
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
    'January',
]
// {months.map((month, index) => {
//     <div key={index} className="months">
//         {month}
//     </div>
// })}
const Months = (props) => {

    let Nov = props.Nov

    let Total = 6150
    let TotalDiv = Math.floor(Total/13)

    console.log(TotalDiv)

    const scrollToDec2 = (elementRef) => {
        window.scrollTo({
            top: 0,
            behavior:'smooth'
        })
    }

    const scrollToJan = (elementRef) => {
        window.scrollTo({
            top: TotalDiv*1,
            behavior:'smooth'
        })
    }

    const scrollToFeb = (eRelementRefef) => {
        window.scrollTo({
            top: TotalDiv*2,
            behavior:'smooth'
        })
    }

    const scrollToMar = (elementRef) => {
        window.scrollTo({
            top: TotalDiv*3,
            behavior:'smooth'
        })
    }

    const scrollToApr = (elementRef) => {
        window.scrollTo({
            top: TotalDiv*4,
            behavior:'smooth'
        })
    }

    const scrollToMay = (elementRef) => {
        window.scrollTo({
            top: TotalDiv*5,
            behavior:'smooth'
        })
    }

    const scrollToJun = (elementRef) => {
        window.scrollTo({
            top: TotalDiv*6,
            behavior:'smooth'
        })
    }

    const scrollToJul = (eelementRefRef) => {
        window.scrollTo({
            top: TotalDiv*7,
            behavior:'smooth'
        })
    }

    const scrollToAug = (elementRef) => {
        window.scrollTo({
            top: TotalDiv*8,
            behavior:'smooth'
        })
    }

    const scrollToSep = (elementRef) => {
        window.scrollTo({
            top: TotalDiv*9,
            behavior:'smooth'
        })
    }

    const scrollToOct = (elementRef) => {
        window.scrollTo({
            top: TotalDiv*10,
            behavior:'smooth'
        })
    }

    const scrollToNov = (elementRef) => {
        window.scrollTo({
            top: TotalDiv*11,
            behavior:'smooth',
            
        })
    }

    const scrollToDec = (elementRef) => {
        window.scrollTo({
            top: TotalDiv*12,
            behavior:'smooth'
        })
    }

    const scrollToJan2 = (elementRef) => {
        window.scrollTo({
            top: TotalDiv*13,
            behavior:'smooth'
        })
    }

    

    return ( 
            /* 
            <div className="monthsContainer">
                {months.map((month, index) => {
                    return (
                        <div key={index} className="months" id={month} onClick={() => scrollToJune(jumpToMonth)}>
                            {console.log(`scrollTo${month}(jumpToMonth)`)}
                            {month.slice(0,3)}
                        </div>
                    )
                })}
            </div>
            */
            <div className="monthsContainer">
                <div className="months" id="Dec" onClick={() => scrollToDec2(props.Dec2)}>
                    Dec
                </div>
                <div className="months" id="Jan" onClick={() => scrollToJan(props.Jan)}>
                    Jan
                </div>
                <div className="months" id="Feb" onClick={() => scrollToFeb(props.Feb)}>
                    Feb
                </div>
                <div className="months" id="Mar" onClick={() => scrollToMar(props.Mar)}>
                    Mar
                </div>
                <div className="months" id="Apr" onClick={() => scrollToApr(props.Apr)}>
                    Apr
                </div>
                <div className="months" id="May" onClick={() => scrollToMay(props.May)}>
                     May
                </div>
                <div className="months" id="Jun" onClick={() => scrollToJun(props.Jun)}>
                    Jun
                </div>
                <div className="months" id="Jul" onClick={() => scrollToJul(props.Jul)}>
                    Jul
                </div>
                <div className="months" id="Aug" onClick={() => scrollToAug(props.Aug)}>
                    Aug
                </div>
                <div className="months" id="Sep" onClick={() => scrollToSep(props.Sep)}>
                    Sep
                </div>
                <div className="months" id="Oct" onClick={() => scrollToOct(props.Oct)}>
                    Oct
                </div>
                <div className="months" id="Nov" onClick={() => scrollToNov(props.Nov)}>
                    Nov
                </div>
                <div className="months" id="Dec" onClick={() => scrollToDec(props.Dec)}>
                    Dec
                </div>
                <div className="months" id="Jan" onClick={() => scrollToJan2(props.Jan2)}>
                    Jan
                </div>



            </div>
     );
}
 
export default Months;