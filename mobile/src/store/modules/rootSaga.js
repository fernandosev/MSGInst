import {all} from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas';
import group from './group/sagas';

export default function* rootReducer() {
  return yield all([auth, user, group]);
}
