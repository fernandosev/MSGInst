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
