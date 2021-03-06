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
  const {loading, user, repos, memo} = useGithubContext()

  const history = useHistory()

  useEffect(() => {
    if (firstRender) {
      setFirstRender(false)
    } else if (!firstRender && !user && memo.toLowerCase()) {
      history.push('/notfound')
    } else if (!firstRender && memo.toLowerCase() && !repos.length) {
      history.push('/empty')
    }
  }, [memo, user, repos])

  return (
    <>
      {loading
        ? <Loading/>
        : (memo && user && (user.login.toLowerCase() === memo.toLowerCase()))
          ? <>
            <User/>
            <Repos/>
          </>
          : <CenterBox
            icon={icon}
            text='Start with searching a GitHub user'
          />
      }
    </>
  )
}

export default Home