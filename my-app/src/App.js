import './App.css';
import AddTaskTab from './components/AddTaskTab';
import Timetable from './components/Timetable';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';


function App() {

  const events = useState([]);

  return (

    
    <div className="App">
      

      <div id="addTaskTab"><AddTaskTab events={events}/></div>

      <div id="timeTable">
      <Timetable/>
      </div>

      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
