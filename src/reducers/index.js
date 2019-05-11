import { combineReducers } from 'redux';
import users from './users';
import appointments from './appointments';
import session from './session';

export default combineReducers({
  users,
  appointments,
  session,
});
