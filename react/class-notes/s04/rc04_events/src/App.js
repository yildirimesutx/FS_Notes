import './App.css';
import AddEvents from './components/addEvents/AddEvents';
import MouseEvents from './components/mouseEvents/MouseEvents';
import Form from './components/form/Form';
import KeyboardEvents from './components/keyboardEvents/KeyboardEvents';
import EventBind from './components/eventBinding/EventBind';
import Postclass from './components/mouseEvents/Postclass';
import PostClass from './components/form/PostClass';

function App() {
  return (
    <div className="App">
      <h1>Events in React Js</h1>
      {/* <AddEvents/> */}
      {/* <MouseEvents/> */}
      {/* <Form/> */}
      {/* <KeyboardEvents/> */}
      {/* <EventBind/> */}
      {/* <Postclass/> */}
      <PostClass/>
    </div>
  );
}

export default App;
