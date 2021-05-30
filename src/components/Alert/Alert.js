import React from "react";
import {useAlertContext} from "../../context/alert/state";
import './Alert.scss'

const Alert = () => {

  const {visible, text, show} = useAlertContext()
  console.log(visible, text, show)

  if (!visible) return null

  return (
      <span className='Alert'>{text}</span>
  )
}


export default Alert