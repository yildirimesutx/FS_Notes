import Person from "./components/Person";

function App() {
  return (
    <div>
      <h1>hello React</h1>
      <Person name="Ahmet Can" img="https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947__480.jpg" tel="55555"/>
      <Person name="Mehmet Can" img="https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947__480.jpg"/>
      <Person name="Hasan Can" img="https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947__480.jpg"/>
    </div>
  );
}

export default App;
