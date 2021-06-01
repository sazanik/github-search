import React, {createContext, useContext, useReducer} from "react";
import axios from "axios";
import {reducer} from "./reducer";
import {
  GET_USER_ERROR,
  SET_MEMO,
  GET_USER,
  GET_REPOS,
  SET_LOADING,
  SET_CURRENT_PAGE
} from "../types";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET

const GithubContext = createContext('state GithubContext')
export const useGithubContext = () => useContext(GithubContext)

export const GithubState = ({children}) => {
  const initialState = {
    user: null,
    repos: [],
    loading: false,
    memo: '',
    currentPage: 1,
    perPage: 4,
    totalRepos: 0,

  }
  const [state, dispatch] = useReducer(reducer, initialState)

  const {user, repos, loading, memo, currentPage, perPage, totalRepos} = state

  const getRepos = async (name, perPage, currentPage) => {
    setLoading()
    try {
      // const res = await axios.get(`https://api.github.com/users/${name}/repos?per_page=${perPage}&page=${currentPage}`)
      const res = await axios.get(
        `https://api.github.com/users/${name}/repos?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&per_page=${perPage}&page=${currentPage}`)

      dispatch({
        type: GET_REPOS,
        payload: res.data
      })
    } catch (err) {
      console.log(err)
    }

  }

  const getUser = async (name, perPage, currentPage) => {
    setLoading()

    try {
      // const res = await axios.get(`https://api.github.com/users/${name}`)
      const res = await axios.get(
        `https://api.github.com/users/${name}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`)

      dispatch({
        type: GET_USER,
        payload: res.data,
      })
      await getRepos(name, perPage, currentPage)
    } catch (err) {
      console.log(err)
      dispatch({type: GET_USER_ERROR,})
    }
  }

  const setLoading = () => dispatch({type: SET_LOADING})

  const setCurrentPage = page => {
    setLoading()
    dispatch({type: SET_CURRENT_PAGE, payload: page})
  }

  const setMemo = (text) => {

    dispatch({type: SET_MEMO, payload: {text}})
  }

  return (
    <GithubContext.Provider value={{
      getUser,
      getRepos,
      setLoading,
      setCurrentPage,
      setMemo,
      user,
      repos,
      loading,
      memo,
      currentPage,
      perPage,
      totalRepos
    }}>
      {children}
    </GithubContext.Provider>
  )
}

