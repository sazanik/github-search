import React, {createContext, useReducer} from "react";
import {reducer} from "./reducer";
import {GET_USER, GET_REPOS, USER_NOT_FOUND, SET_LOADING} from "../types";

const GithubContext = createContext('state GithubContext')

export const GithubState = ({children}) => {
  const initialState = {
    user: {},
    repos: [],
    loading: false,
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  const {user, repos, loading} = state

  const getUser = async value => {
    setLoading()

    dispatch({
      type: GET_USER,
      payload: {}
    })
  }

  const getRepos = async value => {
    setLoading()

    dispatch({
      type: GET_REPOS,
      payload: []
    })
  }

  const notFoundUser = () => dispatch({type: USER_NOT_FOUND})

  const setLoading = () => dispatch({type: SET_LOADING})


  return (
    <GithubContext.Provider value={{getUser, getRepos, notFoundUser, setLoading, user, repos, loading}}>
      {children}
    </GithubContext.Provider>
  )
}
