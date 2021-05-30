import React, {useContext, useReducer} from "react";
import {reducer} from "./reducers";
import {SHOW_ALERT, HIDE_ALERT} from "./types";

const AppContext = React.createContext('default State')
export const useAppContext = () => useContext(AppContext)

export const AlertProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, {
    visible: false,
    text: '',
    show, hide
  })

  function show(text) {
    return dispatch({
      type: SHOW_ALERT,
      payload: {text}
    })
  }

  function hide() {
    return dispatch({
      type: HIDE_ALERT,
    })
  }

  return (
    <AppContext.Provider value={state}>
      {children}
    </AppContext.Provider>
  )
}

