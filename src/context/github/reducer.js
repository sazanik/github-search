import {GET_REPOS, GET_USER, SET_LOADING, USER_NOT_FOUND, REPO_LIST_EMPTY} from '../types'

const handlers = {
  [GET_USER]: (state, action) => ({...state, user: action.payload, loading: false}),
  [GET_REPOS]: (state, action) => ({...state, repos: action.payload, loading: false}),
  [SET_LOADING]: state => ({...state, loading: true}),
  [USER_NOT_FOUND]: state => ({...state, user: {}}),
  [REPO_LIST_EMPTY]: state => ({...state, repos: []}),
  DEFAULT: state => state
}


export const reducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT

  return handler(state, action)
}