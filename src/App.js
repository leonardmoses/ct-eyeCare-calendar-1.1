import './styles/App.scss';
import Layout from './components/common/Layout';
import JulianDays from './components/JS/JulianDays';

function App() {

  
  return (

    <Layout>
      <div className="App">


        <div className="calContainer">

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
