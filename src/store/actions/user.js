import {createAction} from '@reduxjs/toolkit';

const ActionType = {
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  SET_USER: `user/setUser`,
};


const requireAuthorization = createAction(
    ActionType.REQUIRED_AUTHORIZATION,
    (payload) => ({payload})
);

const setUser = createAction(
    ActionType.SET_USER,
    (payload) => ({payload})
);


export {
  ActionType,
  requireAuthorization,
  setUser,
};
