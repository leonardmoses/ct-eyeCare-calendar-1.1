import './styles/App.scss';
import Layout from './components/common/Layout';

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
              <div className="weekdays">Sat</div>
              <div className="weekdays">Sun</div>
              <div className="weekdays">Mon</div>
              <div className="weekdays">Tues</div>
              <div className="weekdays">Wed</div>
              <div className="weekdays">Thu</div>
              <div className="weekdays">Fri</div>
          </div>

          <div className="calendar">

            <div className="julianDays">

                <div className="prev-year-days">28</div>
                <div className="prev-year-days">29</div>
                <div className="prev-year-days">30</div>
                <div className="prev-year-days">31</div>

                <div className="current-year-days">1</div>
                <div className="current-year-days">2</div>
                <div className="current-year-days">3</div>
                <div className="current-year-days">4</div>
                <div className="current-year-days">5</div>
                <div className="current-year-days">6</div>
                <div className="current-year-days">7</div>
                <div className="current-year-days">8</div>
                <div className="current-year-days">365</div>
                    
                <div className="next-year-days">1</div>
                <div className="next-year-days">2</div>
                <div className="next-year-days">3</div>
                <div className="next-year-days">4</div>
                <div className="next-year-days">5</div>

            </div>
          </div>

    </div>
      </div>
    </Layout>

  );
}

export default App;
