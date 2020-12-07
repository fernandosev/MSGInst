export function signInRequest(email, password, toast) {
  return {
    type: '@auth/SIGNIN_REQUEST',
    payload: {email, password, toast},
  };
}

export function signInSuccess(token) {
  return {
    type: '@auth/SIGNIN_SUCCESS',
    payload: {token},
  };
}

export function signInFailure() {
  return {
    type: '@auth/SIGNIN_SUCCESS',
  };
}
