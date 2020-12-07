import {takeLatest, call, put, all, select} from 'redux-saga/effects';
import api, {CancelToken, isCancel} from '~/services/api';
import colors from '~/styles/colors';
import {setUser} from '../user/actions';
import {signInFailure, signInSuccess} from './actions';

let signal;

export function* signIn({payload}) {
  const {email, password, toast} = payload;

  try {
    const response = yield call(api.post, '/user/signin', {
      email,
      password,
    });

    if (response.data.code && response.data.code !== 200) {
      yield put(signInFailure());
      yield toast('Error', response.data.message, colors.danger);
    } else {
      yield put(
        setUser(response.data._id, response.data.name, response.data.email),
      );
      yield put(signInSuccess(response.data.token));
    }
  } catch (err) {
    yield put(signInFailure());
    yield toast('Error', response.data.message, colors.danger);
  }
}

export default all([takeLatest('@auth/SIGNIN_REQUEST', signIn)]);
