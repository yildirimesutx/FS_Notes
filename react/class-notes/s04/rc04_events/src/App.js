import './App.css';
import AddEvents from './components/addEvents/AddEvents';
import MouseEvents from './components/mouseEvents/MouseEvents';
import Form from './components/form/Form';
import KeyboardEvents from './components/keyboardEvents/KeyboardEvents';

function App() {
  return (
    <div className="App">
      <h1>Events in React Js</h1>
      {/* <AddEvents/> */}
      {/* <MouseEvents/> */}
      {/* <Form/> */}
      <KeyboardEvents/>
    </div>
  );
}

export default App;
