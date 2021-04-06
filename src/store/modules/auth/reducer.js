import {LOGIN, LOGOUT} from  '../types'

const INITIAL_STATE = {
  token: null,
  phone_number:null
  };

// auth reducer
export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
      case LOGIN:
          return {...state, phone_number: action.payload.phone_number, token: action.payload.token };
      case LOGOUT:
          return INITIAL_STATE;
      default:
          return state;
  }
}
