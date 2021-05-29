import React from "react";
import './Navbar.scss'
import Input from "../Input/Input";
import logo from '../../icons/github.svg'

const Navbar = () => {

  return (
      <nav className='Navbar'>
        <img
          className='logo'
          src={logo}
          alt="github logo"/>
        <Input/>
      </nav>
  )
}

export default Navbar