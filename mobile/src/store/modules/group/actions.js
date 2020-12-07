export function createGroupRequest(name, toast) {
  return {
    type: '@group/CREATE_GROUP_REQUEST',
    payload: {name, toast},
  };
}

export function createGroupSuccess() {
  return {
    type: '@group/CREATE_GROUP_SUCCESS',
  };
}

export function createGroupFailure() {
  return {
    type: '@group/CREATE_GROUP_FAILURE',
  };
}

export function getMyGroupsRequest(toast) {
  return {
    type: '@group/GET_MY_GROUPS_REQUEST',
    payload: {toast},
  };
}

export function getMyGroupsSuccess(groups) {
  return {
    type: '@group/GET_MY_GROUPS_SUCCESS',
    payload: {groups},
  };
}

export function getMyGroupsFailure() {
  return {
    type: '@group/GET_MY_GROUPS_FAILURE',
  };
}

export function getAnotherGroupsRequest(toast) {
  return {
    type: '@group/GET_ANOTHER_GROUPS_REQUEST',
    payload: {toast},
  };
}

export function getAnotherGroupsSuccess(groups) {
  return {
    type: '@group/GET_ANOTHER_GROUPS_SUCCESS',
    payload: {groups},
  };
}

export function getAnotherGroupsFailure() {
  return {
    type: '@group/GET_ANOTHER_GROUPS_FAILURE',
  };
}

export function joinGroupRequest(id, toast) {
  return {
    type: '@group/JOIN_GROUP_REQUEST',
    payload: {id, toast},
  };
}

export function joinGroupSuccess() {
  return {
    type: '@group/JOIN_GROUP_SUCCESS',
  };
}

export function joinGroupFailure() {
  return {
    type: '@group/JOIN_GROUP_FAILURE',
  };
}

export function sendMessageRequest(title, message, groupID) {
  return {
    type: '@group/SEND_MESSAGE_REQUEST',
    payload: {title, message, groupID},
  };
}

export function sendMessageSuccess() {
  return {
    type: '@group/SEND_MESSAGE_SUCCESS',
  };
}

export function sendMessageFailure() {
  return {
    type: '@group/SEND_MESSAGE_FAILURE',
  };
}
