import {takeLatest, call, put, all, select} from 'redux-saga/effects';
import api, {CancelToken, isCancel} from '~/services/api';
import colors from '~/styles/colors';
import {createUserFailure, createUserSuccess} from './actions';

let signal;

export function* createUser({payload}) {
  const {name, email, password, toast} = payload;

  try {
    const response = yield call(api.post, '/user/register', {
      name,
      email,
      password,
    });

    if (response.data.code === 200) {
      yield put(createUserSuccess());
      yield toast('Success', response.data.message, colors.success);
    } else {
      yield put(createUserFailure());
      yield toast('Error', response.data.message, colors.danger);
    }
  } catch (err) {
    yield put(createUserFailure());
    yield toast('Error', err, colors.danger);
  }
}

export default all([takeLatest('@user/CREATE_USER_REQUEST', createUser)]);
