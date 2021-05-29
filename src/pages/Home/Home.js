import React from "react";
import './Home.scss'
import searchBig from '../../icons/search-big.svg'

const Home = () => {
  return (
    <div className='Home'>
      <img
        className='searchBig'
        src={searchBig}
        alt="search-icon"
      />
      <p className='start-text'
      >
        Start with searching
        a GitHub user
      </p>
    </div>
  )
}

export default Home