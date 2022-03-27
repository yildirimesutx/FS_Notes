import React from 'react'
import Logo from "../../assets/react.svg"
import "./Header.css"

const Header = () => {
  return (
    <div className='logo-container'>
<img className='logo' src={Logo} alt="" />
        
    </div>
  )
}

export default Header