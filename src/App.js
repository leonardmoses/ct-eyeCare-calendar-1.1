import React, {useState, useEffect, useInsertionEffect} from 'react';
import './styles/App.scss';
import Layout from './components/common/Layout';
import JulianDays from './components/JS/JulianDays';
import Year from './components/JS/Year';
import axios from 'axios';
import Modal from './components/Modal';
import Request from './components/Request'



function App() {

  // #region Modal
  const [isOpen, setIsOpen] = useState(false)
  // #endregion

  
  return (

    <Layout>
      <div className="App">
      <Request/>

        <div className="calContainer">

          <div className="calHeader">
              <div className="selectedMonth"><h2>Test Month</h2></div>
              <div className="selectedDate"><h4>Test Date</h4></div>
          </div>
          
          <div className="button_wrapper_style">
            <button onClick={() => setIsOpen(true)}>Add Event</button>
            <Modal open={isOpen} onClose={() => setIsOpen(false)}>
            </Modal>
          </div>

          <div className="daysOfWeek">
              <div className="weekdays">Sun</div>
              <div className="weekdays">Mon</div>
              <div className="weekdays">Tues</div>
              <div className="weekdays">Wed</div>
              <div className="weekdays">Thu</div>
              <div className="weekdays">Fri</div>
              <div className="weekdays">Sat</div>
          </div>

          <div className="calendar">

            <div className="julianDays">
              <JulianDays/>
            </div>

          </div>

    </div>
      </div>
    </Layout>

  );
}

export default App;
