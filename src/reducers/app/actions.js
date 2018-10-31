import * as types from './actionTypes'
import { NavigationActions } from 'react-navigation'

export function init() {
  return async function(dispatch, getState) {
    const { token } = getState().app.toJS()
    dispatch(NavigationActions.navigate({ routeName: token ? 'App' : 'Auth' }))
  }
}

export function login() {
  return async function(dispatch, getState) {
    dispatch({ type: types.RETRIEVE_TOKEN, token: 'valid-token'})
    dispatch(NavigationActions.navigate({ routeName: 'App' }))
  }
}

export function logout() {
  return async function(dispatch, getState) {
    dispatch({ type: types.DESTROY_TOKEN })
    dispatch(NavigationActions.navigate({ routeName: 'AuthLoading' }))
  }
}
