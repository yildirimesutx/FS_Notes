
import "./Msg.css"
import butterfly from "./img/butterfly.png";

function Msg() {
  return (
    <div>
<h1>
    Welcom to our React Courses
</h1>
<img
className="msg-img" src="https://cdn.pixabay.com/photo/2020/03/09/17/51/narcis-4916584__340.jpg" alt="" />

<img src={butterfly} alt="" className="msg-img" />
</div>
  )
}

export default Msg

