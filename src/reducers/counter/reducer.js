import * as types from './actionTypes'
import { fromJS } from 'immutable'

const initialState = fromJS({
  count: 0,
})

export default function counter(state = initialState, action) {
  switch (action.type) {
    case types.INCREMENT:
      return state.merge({
        count: state.get('count') + 1
      })
    case types.DECREMENT:
      return state.merge({
        count: state.get('count') - 1
      })
    default:
      return state
  }
}
