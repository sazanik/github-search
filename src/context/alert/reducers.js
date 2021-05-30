import {HIDE_ALERT, SHOW_ALERT} from "../types";

export const reducer = (state, action) => {
  console.log(action)
  switch (action.type) {

    case SHOW_ALERT:
      return {...state, visible: true, text: action.payload.text}

    case HIDE_ALERT:
      return {...state, visible: false, text: '' }

    default:
      return state
  }
}