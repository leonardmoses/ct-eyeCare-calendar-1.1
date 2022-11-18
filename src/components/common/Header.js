import React, {useState, useEffect, useRef, createElement} from "react";
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Months from "../Months";
import WindowResize from "../WindowResize";
import Year from "../Year";
import MainModal from '../MainModal';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const Header = () => {

    return ( 
        <div className='Header'>
            
            <div className="HeaderTopBlock">
                <div className="titleDiv"><h1>See-Care-Cal</h1></div>
                <div className="yearDiv">
                    <Year/>
                </div>

                <MainModal/>
            </div>




            <div className="monthsDiv"><Months/></div>

            <div className="daysOfWeek">
                <div className="weekdays">Sun</div>
                <div className="weekdays">Mon</div>
                <div className="weekdays">Tues</div>
                <div className="weekdays">Wed</div>
                <div className="weekdays">Thu</div>
                <div className="weekdays">Fri</div>
                <div className="weekdays">Sat</div>
            </div>
        </div>
     );
}
 
export default Header;