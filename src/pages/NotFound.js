import React, {useEffect, useState} from "react";
import '../App.scss'
import icon from '../icons/user.svg'
import {useHistory} from "react-router-dom";
import CenterBox from "../components/CenterBox/CenterBox";
import {useGithubContext} from "../context/github/state";
import Loading from "../components/Loading/Loading";

const NotFound = () => {

  const [firstRender, setFirstRender] = useState(true)
  const {user, memo, repos, loading} = useGithubContext()

  const history = useHistory()

  useEffect(() => {
    if (firstRender) {
      setFirstRender(false)
    } else if ((memo && user && (user.login === memo))) {
      history.push('/')
    } else if ((memo && user && !repos && (user.login === memo))) {
      history.push('/empty')
    }
  }, [memo, user])

  return (
    loading
      ? <Loading/>
      : <CenterBox
        icon={icon}
        text='User not found'
      />

  )
}

export default NotFound