import React from 'react'
import {useAlertContext} from '../../context/alert/state'
import './Alert.scss'

const Alert = () => {
  const {visible, text} = useAlertContext()
  if (!visible) return

  return (
      <span className='Alert'>{text}</span>
  )
}

export default Alert