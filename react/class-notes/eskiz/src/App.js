import logo from './logo.svg';
import './App.css';
import axios from "axios";
import { useEffect } from 'react';

function App() {

//  useEffect(()=>{
//     axios.get("https://restcountries.com/v3.1/name/Turkey").then((mesut)=>{
//         console.log("naber", mesut)
//     })
  
//   },[]) 

// useEffect(async ()=>{
 
//         const yıldırım = await fetch("https://restcountries.com/v3.1/name/Turkey")
//          const my = await yıldırım.json();
//          console.log(my)
   
//      }
//     ,[])

useEffect(async ()=>{

  const rest = await axios.get("https://restcountries.com/v3.1/name/Turkey")

console.log( "naber", rest)

},[])
       




  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;