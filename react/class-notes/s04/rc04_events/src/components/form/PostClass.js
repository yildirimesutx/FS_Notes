import "./styles.css"
import { useState } from "react";



const PostClass = () => {
const [name, setName] = useState( )
console.log(name)
const [email, setEmail] = useState()

const handleName = (e)=> setName(e.target.value);
const handleEmail =(e)=> setEmail(e.target.value)    




  return (
    <div style={{ height: "110vh" }}>
    <form>
      <div>
        <p></p>
        <label>
          <strong>Username: {name}</strong>
        </label>
        <br />
        <input
          type="text"
          name="name"
          placeholder="name"
         defaultValue="Jane"
         onChange={handleName}
        />
      </div>
      <div>
        <p></p>
        <label>
          <strong>E-mail:{email}</strong>
        </label>
        <br />
        <input
          type="email"
          placeholder="email"
          name="email"
          onChange={handleEmail}
        />
      </div>
      <div>
        <p></p>
        <label>
          <strong>Password: </strong>
        </label>
        <br />
        <input
          type="password"
          placeholder="pass"
          name="pass"
         
        />
      </div>
      <div style={{ margin: "10px auto" }}>
        <p></p>
        <label>
          <strong>Country:  </strong>
        </label>
        <select
          style={{ marginTop: "10px", width: "100px", padding: "10px" }}
          name="country"
        >
          <option value="">Country</option>
          <option value="Turkey">Turkey</option>
          <option value="Germany">Germany</option>
          <option value="Netherland">Netherland</option>
          <option value="France">France</option>
        </select>
      </div>
      <button className="btn__click" type="submit">
        submit
      </button>
    </form>
  </div>
  )
}

export default PostClass