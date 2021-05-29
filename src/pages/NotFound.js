import React from "react";
import '../App.scss'
import icon from '../icons/user.svg'

const NotFound = () => {
  return (
    <div className='container'>
      <img
        className='icon'
        src={icon}
        alt="icon"
      />
      <p className='text text-notfound'
      >
        User not found
      </p>
    </div>
  )
}

export default NotFound