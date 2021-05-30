import React, {useState} from "react";
import '../App.scss'
import icon from '../icons/search-big.svg'
import {useHistory} from "react-router-dom";
import {useGithubContext} from "../context/github/state";
import CenterBox from "../components/CenterBox/CenterBox";
import Loading from "../components/Loading/Loading";
import User from "../components/User/User";

const Home = () => {

  const history = useHistory()

  const {loading, user, memo} = useGithubContext()

  console.log('USER', user)
  console.log('MEMO', memo)
  console.log('LOADING', loading)


  return (
    <>
      {loading
        ? <Loading/>
        : (memo && user && (user.login === memo))
          ? <User/>
          : (!user && memo)
            ? history.push('/notfound')
            : <CenterBox
              icon={icon}
              text='Start with searching a GitHub user'
            />
      }
    </>
  )
}

export default Home