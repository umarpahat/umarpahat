import {
  USER_DATA, LOGOUT
} from '../types'

const INITIAL_STATE = {};

// auth reducer
export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case USER_DATA:
      return { ...state, userData: action.payload };
    case LOGOUT:
      return INITIAL_STATE;
    default:
      return state;
  }
}
