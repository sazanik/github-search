import React from 'react'
import './Navbar.scss'
import Input from '../Input/Input'
import logo from '../../icons/github.svg'

const Navbar = () => (
  <nav className='Navbar'>
    <div className="wrapper">
      <img
        className='logo'
        src={logo}
        alt='github'/>
      <Input/>
    </div>

  </nav>
)

export default Navbar