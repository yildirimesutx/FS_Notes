import logo from './logo.svg';
import './App.css';
import Counter from './components/counter/Counter';
import Todo from "./components/todo/Todo"

function App() {
  return (
    <div className="App">
    <Counter/>
    <Todo/>
    </div>
  );
}

export default App;


// https://github.com/edwardBenedict/redux-class-10