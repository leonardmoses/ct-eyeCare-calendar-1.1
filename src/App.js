import React, {useState, useEffect, useInsertionEffect} from 'react';
import './styles/App.scss';
import Layout from './components/common/Layout';
import JulianDays from './components/JS/JulianDays';
import Year from './components/JS/Year';
import axios from 'axios';



function App() {


  const testList = [
    {
      name: 'Lennie',
      event: 'Have meeting',
      time: "12:00pm"
    }
  ]

  // const URL = `https://reqres.in/api/users`
  // const URL = 'https://reqres.in/api/users/2'
  // const URL = "https://contrivia-backend.herokuapp.com/trivia";
  // const URL = 'https://see-care-php-7-4-kevincranmer180966.codeanyapp.com/see-care-php-7.4/staff/calendar/querypage.php'
  // const URL = 'https://see-care.com/caljsontest.php'
  // const URL = 'https://date.nager.at/api/v2/publicholidays/2020/GB'
  // const URL = 'http://localhost:4000/publicholidays/2020/GB'
  const URL = 'http://localhost:4000/see-care-php-7.4/staff/calendar/querypage.php'

  //GET

  let list = []

  const getRequest = () => {
    fetch(URL, {
      method: 'GET'
      }).then(res => {
        return res.json()
      })
      .then(data => {
        list = data
        console.log(list)
      })
        
      // .catch(error => console.log('ERROR'))
  }

    getRequest(); 
    // console.log(list)

  //POST
  const postRequest = () => {
    fetch( URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        pk: '4',
        start: '2022-10-18 12:00:00',
        end: '2022-10-18 14:00:00',
        description: 'test event',
        category: 'meeting',
        notes: 'this is just for testing purposes',
  
      })
      }).then(res => {
        return res.json()
      })
      .then(data => {
        list = data
        console.log(list)
      })
      // .catch(error => console.log('ERROR'))
  }

// postRequest();



  // useEffect(() => {
  //   fetch('https://see-care-php-7-4-kevincranmer180966.codeanyapp.com/see-care-php-7.4/staff/calendar/querypage.php')
  //   // fetch("https://contrivia-backend.herokuapp.com/trivia")
  //   console.log('use effect ran')
  // }, [])

  return (

    <Layout>
      <div className="App">


        <div className="calContainer">
        <div>
        Test Server:<br/>
        

        </div>

          <div className="calHeader">
              <div className="selectedMonth"><h2>Test Month</h2></div>
              <div className="selectedDate"><h4>Test Date</h4></div>
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
