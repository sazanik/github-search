import {
  GET_USER_ERROR,
  SET_MEMO,
  GET_REPOS,
  GET_USER,
  SET_LOADING,
  REPO_LIST_EMPTY,
  SET_CURRENT_PAGE
} from '../types'

const handlers = {
  [GET_USER]: (state, action) => ({...state, user: action.payload, totalRepos: action.payload.public_repos, currentPage: 1, loading: false}),
  [GET_USER_ERROR]: state => ({...state, user: '', loading: false}),
  [GET_REPOS]: (state, action) => ({...state, repos: action.payload, loading: false}),
  [SET_LOADING]: state => ({...state, loading: true}),
  [REPO_LIST_EMPTY]: state => ({...state, repos: [], loading: false}),
  [SET_MEMO]: (state, action) => ({...state, memo: action.payload.text}),
  [SET_CURRENT_PAGE]: (state, action) => ({...state, currentPage: action.payload, loading: false}),
  DEFAULT: state => state
}

export const reducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action)
}
