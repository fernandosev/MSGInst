import {combineReducers} from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import group from './group/reducer';

export default combineReducers({
  auth,
  user,
  group,
});
