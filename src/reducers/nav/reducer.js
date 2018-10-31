import { fromJS } from 'immutable'
import AppNavigator from '../../AppNavigator'

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('AuthLoading'))

export default function reducer(state = initialState, action) {
  const nextState = AppNavigator.router.getStateForAction(action, state)

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}
