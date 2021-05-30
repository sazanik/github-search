import React from "react";
import '../App.scss'
import icon from '../icons/user.svg'
import {useHistory} from "react-router-dom";
import CenterBox from "../components/CenterBox/CenterBox";
import {useGithubContext} from "../context/github/state";

const NotFound = () => {

  const history = useHistory()

  const {loading, user, memo} = useGithubContext()

  console.log('USER', user)
  console.log('MEMO', memo)
  console.log('LOADING', loading)

  return (
    (memo && user && (user.login === memo))
      ? history.push('/')
      : <CenterBox
        icon={icon}
        text='User not found'
      />


  )
}

export default NotFound