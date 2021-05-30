import React, {useEffect, useState} from "react";
import '../App.scss'
import icon from '../icons/user.svg'
import {useHistory} from "react-router-dom";
import CenterBox from "../components/CenterBox/CenterBox";
import {useGithubContext} from "../context/github/state";

const NotFound = () => {

  const [firstRender, setFirstRender] = useState(true)
  const {loading, user, memo, repos} = useGithubContext()

  const history = useHistory()

  useEffect(() => {
    if (firstRender) {
      console.log('--------EFFECT---------')
      setFirstRender(false)
      console.log('firstRender', firstRender)
    } else if ((memo && user && (user.login === memo))) {
      console.log('firstRender', firstRender)
      history.push('/')
    } else if ((memo && user && !repos && (user.login === memo))) {
      console.log('firstRender', firstRender)
      history.push('/empty')
    }
  }, [memo, user])

  console.log('USER', user)
  console.log('MEMO', memo)
  console.log('LOADING', loading)

  return (
    <CenterBox
      icon={icon}
      text='User not found'
    />

  )
}

export default NotFound