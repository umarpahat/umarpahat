import { combineReducers } from 'redux';

import auth from './auth/reducer';
import userData from './userDetails/reducer'

export default combineReducers({
  authDetails:auth,
  user:userData,
});
