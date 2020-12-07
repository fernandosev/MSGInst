export function createUserRequest(name, email, password, toast) {
  return {
    type: '@user/CREATE_USER_REQUEST',
    payload: {name, email, password, toast},
  };
}

export function createUserSuccess() {
  return {
    type: '@user/CREATE_USER_SUCCESS',
  };
}

export function createUserFailure() {
  return {
    type: '@user/CREATE_USER_FAILURE',
  };
}

export function setUser(_id, name, email) {
  return {
    type: '@user/SET_USER',
    payload: {_id, name, email},
  };
}

export function setUserPushInformations(onesignal_token, onesignal_user_id) {
  return {
    type: '@user/SET_USER_PUSH_INFORMATIONS',
    payload: {onesignal_token, onesignal_user_id},
  };
}

export function setUserPushInformationsRequest() {
  return {
    type: '@user/SET_USER_PUSH_INFORMATIONS_REQUEST',
  };
}

export function setUserPushInformationsSuccess() {
  return {
    type: '@user/SET_USER_PUSH_INFORMATIONS_SUCCESS',
  };
}

export function setUserPushInformationsFailure() {
  return {
    type: '@user/SET_USER_PUSH_INFORMATIONS_FAILURE',
  };
}
