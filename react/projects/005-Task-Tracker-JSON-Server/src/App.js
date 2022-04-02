import { useEffect, useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false);

  const baseUrl = "http://localhost:5000/tasks";


  // fetch tasks

//   const fetchTasks =async ()=>{
   
//    try{ 
//     const res = await fetch(baseUrl)
//     const data = await res.json()  //jsona çevirmediği için 
//     console.log(data)

//  setTasks(data)
// } catch(err){
//   console.log(err)
// }
//   }


// fetch tasks axios

const fetchTasks = async ()=>{
   // const res = await axios.get(baseUrl);
  const {data} = await axios.get(baseUrl);
  console.log(data)
  setTasks(data)
}

 useEffect(()=>{
  fetchTasks();
 }, [])



  // DELETE TASK
const deleteTask = async(deletedTaskId)=>{

  await axios.delete(`${baseUrl}/${deletedTaskId}`)
  fetchTasks()
};


  // const deleteTask = (deletedTaskId) => {
  //   // console.log("delete Task", deletedTaskId);
  //   setTasks(tasks.filter((task) => task.id !== deletedTaskId));
  // };

  // ADD TASK

 // const addTask = async (newTask) => {
  //   const res = await fetch(baseUrl, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(newTask),
  //   });
  //   await res.json();
  //   console.log(res);
  //   fetchTasks();
  // };

// add tasks axios

const addTask = async(newTask)=>{
  const res = await axios.post(baseUrl, newTask)
  console.log(res)
  fetchTasks();
}


  // const addTask = (newTask) => {
  //   const id = Math.floor(Math.random() * 1000 + 1);
  //   const addNewTask = { id, ...newTask };
  //   setTasks([...tasks, addNewTask]);
  // };






  // TOGGLE DONE
const toggleDone = async(toggleDoneId) =>{
const {data} = await axios.get(`${baseUrl}/${toggleDoneId}`)
console.log(data);
const updatedTask = {...data, isDone: !data.isDone}
// await axios.put(`${baseUrl}/${toggleDoneId}`, updatedTask)
await axios.patch(`${baseUrl}/${toggleDoneId}`, { isDone: !data.isDone });

fetchTasks();
};




  // const toggleDone = (toggleDoneId) => {
  //   // console.log("double click", toggleDoneId);
  //   setTasks(
  //     tasks.map((task) =>
  //       task.id === toggleDoneId ? { ...task, isDone: !task.isDone } : task
  //     )
  //   );
  // };





  // TOGGLESHOW
  const toggleShow = () => setShowAddTask(!showAddTask);

  return (
    <div className="container">
      <Header
        title="TASK TRACKER"
        showAddTask={showAddTask}
        toggleShow={toggleShow}
      />

      {showAddTask && <AddTask addTask={addTask} />}

      {tasks.length > 0 ? (
        <Tasks tasks={tasks} deleteTask={deleteTask} toggleDone={toggleDone} />
      ) : (
        <h2 style={{ textAlign: "center" }}>NO TASK TO SHOW</h2>
      )}
    </div>
  );
}

export default App;
