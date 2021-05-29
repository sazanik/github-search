import React from "react";
import '../App.scss'
import User from "../components/User/User";
import icon from '../icons/empty.svg'

const Empty = () => {
  return (
    <div className='Empty'>

      <User/>

      <div className='container'>
        <img
          className='icon'
          src={icon}
          alt="icon"
        />
        <p className='text text-empty'
        >
          Repository list is empty
        </p>
      </div>
    </div>

  )
}

export default Empty