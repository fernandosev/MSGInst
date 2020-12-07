import produce from 'immer';

const INITIAL_STATE = {
  myGroups: [],
  anotherGroups: [],
  createGroupLoading: false,
  loadingMyGroups: false,
  loadingAnotherGroups: false,
  loadingJoinGroup: false,
  loadingSendMessage: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@group/CREATE_GROUP_REQUEST': {
        draft.createGroupLoading = true;
        break;
      }

      case '@group/CREATE_GROUP_SUCCESS': {
        draft.createGroupLoading = false;
        break;
      }

      case '@group/CREATE_GROUP_FAILURE': {
        draft.createGroupLoading = false;
        break;
      }

      case '@group/GET_MY_GROUPS_REQUEST': {
        draft.loadingMyGroups = true;
        break;
      }

      case '@group/GET_MY_GROUPS_SUCCESS': {
        draft.myGroups = action.payload.groups;
        draft.loadingMyGroups = false;
        break;
      }

      case '@group/GET_MY_GROUPS_FAILURE': {
        draft.loadingMyGroups = false;
        break;
      }

      case '@group/GET_ANOTHER_GROUPS_REQUEST': {
        draft.loadingAnotherGroups = true;
        break;
      }

      case '@group/GET_ANOTHER_GROUPS_SUCCESS': {
        draft.anotherGroups = action.payload.groups;
        draft.loadingAnotherGroups = false;
        break;
      }

      case '@group/GET_ANOTHER_GROUPS_FAILURE': {
        draft.loadingAnotherGroups = false;
        break;
      }

      case '@group/JOIN_GROUP_REQUEST': {
        draft.loadingJoinGroup = true;
        break;
      }

      case '@group/JOIN_GROUP_SUCCESS': {
        draft.loadingJoinGroup = false;
        break;
      }

      case '@group/JOIN_GROUP_FAILURE': {
        draft.loadingJoinGroup = false;
        break;
      }

      case '@group/SEND_MESSAGE_REQUEST': {
        draft.loadingSendMessage = true;
        break;
      }

      case '@group/SEND_MESSAGE_SUCCESS': {
        draft.loadingSendMessage = false;
        break;
      }

      case '@group/SEND_MESSAGE_FAILURE': {
        draft.loadingSendMessage = false;
        break;
      }
    }
  });
}
