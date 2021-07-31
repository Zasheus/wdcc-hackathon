import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import AddTaskTab from './components/AddTaskTab';
import Timetable from './components/Timetable';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (

    
    <div className="App">
      
      <Timetable/>

      <AddTaskTab/>

      <header className="App-header">
      <h1>Hello World</h1>
      <h1>!!!!!!!!!!!</h1>
      </header>
    </div>
  );
}

export default App;
