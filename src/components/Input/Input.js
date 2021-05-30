import React, {useState} from "react";
import './Input.scss'
import {useAppContext} from "../../context/alert/state";

const Input = () => {
  const [value, setValue] = useState('')

  const {hide, show, text} = useAppContext()

  const changeHandler = e => {
    setValue(e.target.value)
    hide()
  }

  const onSubmit = e => {
    if (e.key !== 'Enter') {
      return
    }

    if (value.trim()) {
      console.log('Make request')
      console.log(value)
    } else {
      show('The field value must not be empty!')
    }
  }

  return (
    <input
      className={!text ? 'Input' : 'Input alert'}
      onKeyPress={onSubmit}
      onChange={e => changeHandler(e)}
      type="text"
      placeholder={text || 'Enter GitHub username'}
    >
    </input>
  )
}

export default Input