import React from "react";
import './Input.scss'
import searchIcon from '../icons/search.svg'

const Input = (props) => {
  console.log(props)
  return (
    <>
      <input
        className='Input'
        type="text"
        placeholder='Enter GitHub username'
      >
      </input>
    </>


  )
}

export default Input