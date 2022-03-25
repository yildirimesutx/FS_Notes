import { useState } from "react";
import "./styles.css"
 
const Postclass = ()=>{
//    const arr = [1,2];
//    const [a,b]= arr;
//    console.log(a,b) description

const [first, setfirst] = useState()
console.log("first",first)
const [second, setSecond] = useState()

const handleOnClick = (e)=>{
  e.target.tagName = "SPAN" && e.currentTarget.remove()
}

const handleDoubleClick = (e)=>{
    console.log("hello")
}




    const handleMouseMove = (e)=>{
//   console.log(e.nativeEvent.offsetX)
//   console.log(e.pageX)
//   console.log(e)
setfirst(e.pageX)
setSecond(e.pageY)

    }
    return(
      <div>
         <h2>MouseEvents</h2>
      <p>
        <span>X{first} </span> and Y{second}
      </p>
      <p>
        <span></span> and
      </p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ul>
          <li id="todo-1" onMouseMove={handleMouseMove} >
            todo item 1 <span>X</span>
          </li>
          <li id="todo-2" onClick={handleOnClick} >
            todo item 2 <span>X</span>
          </li>
          <li onDoubleClick={handleDoubleClick}>
            todo item 3 <span>X</span>
          </li>
          <li>
            todo item 4 <span>X</span>
          </li>
          <li>
            todo item 5 <span>X</span>
          </li>
        </ul>
      </div>
    </div>
    )
}

export default Postclass;