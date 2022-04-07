import React, {useState} from 'react'
import { Logo, Nav,Hamburger,Menu,MenuLink } from './NavbarStyles'
// import {GiHamburgerMenu} from "react-icons/gi"
const Navbar = () => {
  const [isOpen,setIsOpen]=useState(false);
  return (
    <Nav>
      <Logo  to="/home">
        <i>{"<Clarusway>"}</i>
        <span>recipe</span>
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
        {/* <GiHamburgerMenu/> */}
      </Hamburger>

      <Menu osman={isOpen}>
        <MenuLink onClick={() => setIsOpen(!isOpen)} to="/about">
          About
        </MenuLink>
        <MenuLink to="/github">Github</MenuLink>
        <MenuLink onClick={() => setIsOpen(!isOpen)} to="/">
          Logout
        </MenuLink>
      </Menu>
    </Nav>
  );
}

export default Navbar