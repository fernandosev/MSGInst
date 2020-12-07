import {takeLatest, call, put, all, select} from 'redux-saga/effects';
import api, {CancelToken, isCancel} from '~/services/api';
import colors from '~/styles/colors';
import {
  createUserFailure,
  createUserSuccess,
  setUserPushInformationsSuccess,
  setUserPushInformationsFailure,
} from './actions';

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

export function* setOnesignalInformations({payload}) {
  const {_id, onesignal_token, onesignal_user_id} = yield select(
    (state) => state.user,
  );

  try {
    const response = yield call(api.post, '/user/setOneSignalInformations', {
      _id,
      onesignal_token,
      onesignal_user_id,
    });

    if (response.data.code === 200) {
      yield put(setUserPushInformationsSuccess());
    } else {
      yield put(setUserPushInformationsFailure());
    }
  } catch (err) {
    yield put(setUserPushInformationsFailure());
  }
}

export default all([
  takeLatest('@user/CREATE_USER_REQUEST', createUser),
  takeLatest(
    '@user/SET_USER_PUSH_INFORMATIONS_REQUEST',
    setOnesignalInformations,
  ),
]);
