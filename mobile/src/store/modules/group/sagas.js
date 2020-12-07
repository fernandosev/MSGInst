import {takeLatest, call, put, all, select} from 'redux-saga/effects';
import api from '~/services/api';
import {navigate} from '~/services/navigation';
import {
  createGroupFailure,
  createGroupSuccess,
  getAnotherGroupsFailure,
  getAnotherGroupsRequest,
  getAnotherGroupsSuccess,
  getMyGroupsFailure,
  getMyGroupsRequest,
  getMyGroupsSuccess,
  joinGroupFailure,
  joinGroupSuccess,
} from './actions';
import colors from '~/styles/colors';

export function* createGroup({payload}) {
  const userID = yield select((state) => state.user._id);
  const {name, toast} = payload;
  const token = yield select((state) => state.auth.token);

  // api.defaults.headers['access-token'] = token;

  try {
    const response = yield call(api.post, '/group/create', {
      name,
      userID,
    });

    if (response.data.code === 200) {
      yield put(createGroupSuccess());
      yield toast('Success', response.data.message, colors.success);
      yield put(getAnotherGroupsRequest(toast));
      yield put(getMyGroupsRequest(toast));
    } else {
      yield put(createGroupFailure());
      yield toast('Error', response.data.message, colors.danger);
    }
  } catch (err) {
    yield toast('Error', err, colors.danger);
    yield put(createGroupFailure());
  }
}

export function* getMyGroups({payload}) {
  const id = yield select((state) => state.user._id);
  const {toast} = payload;

  // api.defaults.headers['access-token'] = token;

  try {
    const response = yield call(api.post, '/groups/my', {
      id,
    });

    if (response.data.code === 200) {
      yield put(getMyGroupsSuccess(response.data.groups));
    } else {
      yield put(getMyGroupsFailure());
      yield toast('Error', response.data.message, colors.danger);
    }
  } catch (err) {
    yield toast('Error', err, colors.danger);
    yield put(getMyGroupsFailure());
  }
}

export function* getAnotherGroups({payload}) {
  const id = yield select((state) => state.user._id);
  const {toast} = payload;

  // api.defaults.headers['access-token'] = token;

  try {
    const response = yield call(api.post, '/groups/another', {
      id,
    });

    if (response.data.code === 200) {
      yield put(getAnotherGroupsSuccess(response.data.groups));
    } else {
      yield put(getAnotherGroupsFailure());
      yield toast('Error', response.data.message, colors.danger);
    }
  } catch (err) {
    yield toast('Error', err, colors.danger);
    yield put(getAnotherGroupsFailure());
  }
}

export function* joinGroup({payload}) {
  const userID = yield select((state) => state.user._id);
  const {id, toast} = payload;

  // api.defaults.headers['access-token'] = token;

  try {
    const response = yield call(api.post, '/group/join', {
      id,
      userID,
    });

    if (response.data.code === 200) {
      yield put(joinGroupSuccess());
      yield put(getAnotherGroupsRequest(toast));
      yield put(getMyGroupsRequest(toast));
      navigate('MyGroups');
    } else {
      yield put(joinGroupFailure());
      yield toast('Error', response.data.message, colors.danger);
    }
  } catch (err) {
    yield toast('Error', err, colors.danger);
    yield put(joinGroupFailure());
  }
}

export default all([
  takeLatest('@group/CREATE_GROUP_REQUEST', createGroup),
  takeLatest('@group/GET_MY_GROUPS_REQUEST', getMyGroups),
  takeLatest('@group/GET_ANOTHER_GROUPS_REQUEST', getAnotherGroups),
  takeLatest('@group/JOIN_GROUP_REQUEST', joinGroup),
]);
