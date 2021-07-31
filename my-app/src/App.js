import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import AddTaskTab from './components/AddTaskTab';
import Timetable from './components/Timetable';

function App() {
  return (

    
    <div className="App">
      
      <Timetable/>

      <AddTaskTab/>

    </div>
  );
}

export default App;
