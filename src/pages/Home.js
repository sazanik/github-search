import React, {useEffect, useState} from "react";
import '../App.scss'
import icon from '../icons/search-big.svg'
import {useHistory} from "react-router-dom";
import {useGithubContext} from "../context/github/state";
import CenterBox from "../components/CenterBox/CenterBox";
import Loading from "../components/Loading/Loading";
import User from "../components/User/User";
import Repos from "../components/Repos/Repos";

const Home = () => {

  const [firstRender, setFirstRender] = useState(true)
  const {loading, user, memo} = useGithubContext()

  const history = useHistory()

  useEffect(() => {
    if (firstRender) {
      console.log('--------EFFECT---------')
      setFirstRender(false)
      console.log('firstRender', firstRender)
    } else if (!firstRender && !user && memo) {
      console.log('firstRender', firstRender)
      history.push('/notfound')
    }
  }, [memo, user])


  console.log('USER', user)
  console.log('MEMO', memo)
  console.log('LOADING', loading)


  return (
    <>
      {loading
        ? <Loading/>
        : (memo && user && (user.login === memo))
          ? (<>
            <User/>
            <Repos/>
          </>)
          : <CenterBox
            icon={icon}
            text='Start with searching a GitHub user'
          />
      }
    </>
  )
}

export default Home