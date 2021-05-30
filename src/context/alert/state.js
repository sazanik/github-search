import React, {createContext, useContext, useReducer} from "react";
import {reducer} from "./reducer";
import {SHOW_ALERT, HIDE_ALERT} from "../types";

const AlertContext = createContext('state AlertContext')
export const useAlertContext = () => useContext(AlertContext)

export const AlertState = ({children}) => {
  const [state, dispatch] = useReducer(reducer, {
    visible: false,
    text: '',
    showAlert, hideAlert
  })

  function showAlert(text) {
    return dispatch({
      type: SHOW_ALERT,
      payload: {text}
    })
  }

  function hideAlert() {
    return dispatch({
      type: HIDE_ALERT,
    })
  }

  return (
    <AlertContext.Provider value={state}>
      {children}
    </AlertContext.Provider>
  )
}

