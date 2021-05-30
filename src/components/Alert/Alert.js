import React from "react";
import {useAppContext} from "../../context/state";
import './Alert.scss'

const Alert = () => {

  const {visible, text, show} = useAppContext()
  console.log(visible, text, show)

  if (!visible) return null

  return (
      <span className='Alert'>{text}</span>
  )
}


export default Alert