import React, {useEffect, useState} from "react";
import '../App.scss'
import icon from '../icons/user.svg'
import {useHistory} from "react-router-dom";
import CenterBox from "../components/CenterBox/CenterBox";
import {useGithubContext} from "../context/github/state";

const NotFound = () => {

  const [firstRender, setFirstRender] = useState(true)
  const history = useHistory()
  const {loading, user, memo} = useGithubContext()


  useEffect(() => {
    if (firstRender) {
      setFirstRender(false)
      console.log('firstRender', firstRender)
    } else if ((memo && user && (user.login === memo))) {
      console.log('firstRender', firstRender)
      history.push('/')
    }
  })

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