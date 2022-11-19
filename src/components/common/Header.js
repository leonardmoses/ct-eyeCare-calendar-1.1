import React, {useState, useEffect, useRef, createElement} from "react";
import Months from "../Months";
import Year from "../Year";
import MainModal from '../MainModal';
import Button from 'react-bootstrap/Button';


const Header = () => {

    return ( 
        <div className='Header'>
            
            <div className="HeaderTopBlock">
                <div className="titleDiv"><h1>See-Care-Cal</h1></div>
                <div className="yearDiv">
                    <Year/>
                </div>

                <div className="MainModalDiv">
                    <MainModal className="MainModalComponent"></MainModal>
                </div>

            </div>




            <div className="monthsDiv"><Months/></div>

            <div className="daysOfWeek">
                <div className="weekdays" id="Sun">Sun</div>
                <div className="weekdays" id="Mon">Mon</div>
                <div className="weekdays" id="Tue">Tue</div>
                <div className="weekdays" id="Wed">Wed</div>
                <div className="weekdays" id="Thu">Thu</div>
                <div className="weekdays" id="Fri">Fri</div>
                <div className="weekdays" id="Sat">Sat</div>
            </div>
        </div>
     );
}
 
export default Header;