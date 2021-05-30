import React, {useEffect, useState} from "react";
import './Empty.scss'
import User from "../components/User/User";
import icon from '../icons/empty.svg'
import CenterBox from "../components/CenterBox/CenterBox";
import {useGithubContext} from "../context/github/state";
import {useHistory} from "react-router-dom";

const Empty = () => {

  const [firstRender, setFirstRender] = useState(true)
  const {loading, user, repos, memo} = useGithubContext()

  const history = useHistory()

  useEffect(() => {
    if (firstRender) {
      console.log('--------EFFECT---------')
      setFirstRender(false)
      console.log('firstRender', firstRender)
    } /*else if ((memo && user && (user.login === memo))) {
      console.log('firstRender', firstRender)
      history.push('/')
    }*/
  }, [memo, user, repos])

  console.log('USER', user)
  console.log('MEMO', memo)
  console.log('LOADING', loading)

  return (
    <div className='Empty'>
      <User/>
      <CenterBox
        className='box-empty'
        icon={icon}
        text='Repository list is empty'
      />
    </div>
  )
}


export default Empty