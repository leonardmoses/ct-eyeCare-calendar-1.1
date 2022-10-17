import React, {useState, useEffect, useInsertionEffect} from 'react';
import './styles/App.scss';
import Layout from './components/common/Layout';
import JulianDays from './components/JS/JulianDays';



function App() {

  const testList = [
    {
      name: 'Lennie',
      event: 'Have meeting',
      time: "12:00pm"
    }
  ]

  // const URL = `https://reqres.in/api/users`
  const URL = "https://contrivia-backend.herokuapp.com/trivia";
  // const URL = 'https://see-care-php-7-4-kevincranmer180966.codeanyapp.com/see-care-php-7.4/staff/calendar/querypage.php'

  //GET

  let list = []

  const getRequest = () => {
    fetch(URL, {
      // origin: 'http://localhost:3000',
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

  // //POST
  // fetch( URL, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({
  //     id: 7,
  //     email: 'lennie@lennie.com',
  //     first_name: 'Lennie',
  //     last_name: 'Moses',

  //   })
  //   }).then(res => {
  //     return res.json()
  //   })
  //   .then(data => console.log(data))
  //   .catch(error => console.log('ERROR'))


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
