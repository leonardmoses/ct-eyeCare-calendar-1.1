import React, {useState, useEffect, useInsertionEffect} from 'react';
import './styles/App.scss';
import Layout from './components/common/Layout';
import JulianDays from './components/JulianDays';
import axios from 'axios';
import {URL} from './components/JS/URLS'



function App() {

  // #region Modal
  const [isOpen, setIsOpen] = useState(false)
  // #endregion

  // #region GET Request
  const [events, setEvents] = useState('')

  const fetchData = async () => {
      try {
          const response = await axios(URL);
          setEvents(response.data)
      } catch (error) {
          console.log(error.response)
      }
  };
  

  useEffect(() => {
    fetchData();
}, []);
  // #endregion GET request

  return (

    <Layout>
      <div className="App">


        <div className="calContainer">
        
          <div className="julianDaysComponent">
            <JulianDays URL={URL} events={events}/>
          </div>

        </div>

      </div>
    </Layout>

  );
}

export default App;
