import React from "react";
import '../App.scss'
import icon from '../icons/search-big.svg'

const Home = () => {
  return (
    <div className='container'>
      <img
        className='icon'
        src={icon}
        alt="icon"
      />
      <p className='text text-home'
      >
        Start with searching
        a GitHub user
      </p>
    </div>
  )
}

export default Home