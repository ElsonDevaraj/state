import logo from './logo.svg';
import './App.css';
import StateExample from './StateExample';
import Statecounter from './Statecounter';
import Reducers from './Reducers';

function App() {
  return (
    <div className="App">
      <Reducers/>
      <StateExample/>
      <Statecounter/>
    </div>
  );
}

export default App;
