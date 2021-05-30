import React from "react";
import '../App.scss'
import icon from '../icons/search-big.svg'
import {useGithubContext} from "../context/github/state";
import Loading from "../components/Loading/Loading";

const Home = () => {

  const {getUser, loading} = useGithubContext()

  return (
    loading
      ? <Loading/>
      : <div className='container'>
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