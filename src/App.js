import './App.css';
import Countdown, { calcTimeDelta } from "react-countdown";
import { DateTime } from 'luxon';

const meet = new Date("2023-02-08T21:00:00");

const date = calcTimeDelta(meet)

const meetingdate = DateTime.local(2023, 2, 8, 21, 0)

const now = DateTime.now()

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Meg and Clay are Reunited Countdown :)</h1>
        <h2 className='Box'>
          <Countdown date={meet + Date.now()} />
        </h2>
        <img src="./IMG_4230.JPG" alt="megandclayhappy" width="300px" height="300px" className='Box'/>
        <p>More to come...</p>
        
      </header>
    </div>

  );
}

export default App;
