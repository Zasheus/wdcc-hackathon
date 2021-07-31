import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import AddTaskTab from './components/AddTaskTab';
import Timetable from './components/Timetable';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (

    
    <div className="App">
      

      <div id="addTaskTab"><AddTaskTab/></div>

      <div id="timeTable">
      <Timetable/>
      </div>

      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
