
import axios from 'axios';
import{useState} from 'react'
import Header from "../../components/header/Header"


const APP_ID = 'fa255c54';
const APP_KEY = '864a82802664a50366c68f2ca424dad1';


const Home = () => {

  const [query,setQuery]= useState("")
  const [food,setFood]= useState()
  const mealTypes = ["Breakfast", "Lunch", "Dinner","Snack", "Teatime"]
  const [meal,setMeal]= useState(mealTypes[0].toLowerCase());



  const url =`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`


 const getData = async ()=>{
   if(query){
    const result=  await axios.get(url);
    setFood(result.data.hits)
  } else{
    console.log("please fill the from")
  }
 }


  return (
    <div>
    <Header setQuery={setQuery}
    getData={getData}
    mealTypes={mealTypes}
    setMeal={setMeal}
    
    /> 
      
      
      
   </div>
  )
}

export default Home