import * as types from './actionTypes';
import { fromJS } from 'immutable';

const initialState = fromJS({
  token: null,
});

export default function counter(state = initialState, action) {
  switch (action.type) {
    case types.RETRIEVE_TOKEN:
      return state.merge({
        token: action.token
      });
    case types.DESTROY_TOKEN:
      return state.merge({
        token: null
      });
    default:
      return state;
  }
}
