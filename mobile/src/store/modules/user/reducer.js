import produce from 'immer';

const INITIAL_STATE = {
  _id: null,
  name: '',
  email: '',
  onesignal_token: null,
  onesignal_user_id: null,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@user/CREATE_USER_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@user/CREATE_USER_SUCCESS': {
        draft.loading = false;
        break;
      }

      case '@user/CREATE_USER_FAILURE': {
        draft.loading = false;
        break;
      }

      case '@user/SET_USER': {
        draft._id = action.payload._id;
        draft.name = action.payload.name;
        draft.email = action.payload.email;
        break;
      }

      case '@user/SET_USER_PUSH_INFORMATIONS': {
        draft.onesignal_token = action.payload.onesignal_token;
        draft.onesignal_user_id = action.payload.onesignal_user_id;
        break;
      }

      case '@user/SET_USER_PUSH_INFORMATIONS_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@user/SET_USER_PUSH_INFORMATIONS_SUCCESS': {
        draft.loading = false;
        draft.onesignal_token = action.payload.onesignal_token;
        draft.onesignal_user_id = action.payload.onesignal_user_id;
        break;
      }

      case '@user/SET_USER_PUSH_INFORMATIONS_FAILURE': {
        draft.loading = false;
        break;
      }
    }
  });
}
