import logo from './logo.svg';
import './App.css';
import axios from "axios";


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




let APP_KEY = "864a82802664a50366c68f2ca424dad1"

let APP_ID =  "fa255c54"

let query = "pizza"

let meal = "Dinner"

let url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`


 const getApi = async () =>{
    
const response = await axios(url)
console.log(response)
 }


getApi()










// const rest = axios.get(url)

// console.log( "naber", rest)










// useEffect(async ()=>{

//   const rest = await axios.get(url)

// console.log( "naber", rest)

// },[])
       

// https://api.edamam.com/search?q=${query}&app_id=${fa80e48b}&app_key=${58d9e40af297f0ee2f74a36b5d1a9e4b}&mealType=${pizza}


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
