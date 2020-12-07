import produce from 'immer';

const INITIAL_STATE = {
  id: null,
  name: '',
  email: '',
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
    }
  });
}
