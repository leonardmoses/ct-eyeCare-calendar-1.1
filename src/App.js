import React, {useState, useEffect} from 'react';
import './styles/App.scss';
import Layout from './components/common/Layout';
import JulianDays from './components/JulianDays';
import axios from 'axios';
import {URL} from './components/JS/URLS'



function App() {

  // #region GET Request
  const [events, setEvents] = useState('')

const getEvents = () => {
  axios.get(`${URL}/getEvents`)
  .then(response => {
    setEvents(response.data)
  })
}

  useEffect(() => {
    getEvents();
  }, []);
  // #endregion GET request

  console.log(events)
  console.log(events[0])

  return (

    <Layout>
      <div className="App">


        <div className="calContainer">
        
          <div className="julianDaysComponent">
            <JulianDays URL={URL} events={events} setEvents={setEvents}/>
          </div>

        </div>

      </div>
    </Layout>

  );
}

export default App;
