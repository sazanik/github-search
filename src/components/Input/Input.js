import React, {useState} from "react";
import './Input.scss'
import {useAlertContext} from "../../context/alert/state";
import {useGithubContext} from "../../context/github/state";

const Input = () => {
  const [searchValue, setSearchValue] = useState('')
  const {hideAlert, showAlert, text} = useAlertContext()
  const {getUser, setValue, perPage, currentPage} = useGithubContext()


  const changeHandler = e => {
    setSearchValue(e.target.value)
    hideAlert()
  }

  const onSubmit = e => {
    if (e.key !== 'Enter') {
      return
    }

    if (searchValue.trim()) {
      getUser(searchValue.trim(), perPage, currentPage)
      setValue(searchValue)
    } else {
      showAlert('The field value must not be empty!')
    }
  }

  return (
    <input
      type="text"
      className={!text ? 'Input' : 'Input alert'}
      value={searchValue}
      onKeyPress={onSubmit}
      onChange={e => changeHandler(e)}
      placeholder={text || 'Enter GitHub username'}
    />
  )
}

export default Input