const ActionType = {
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  SET_USER: `user/setUser`,
};


const requireAuthorization = (payload) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload,
});
const setUser = (payload) => ({
  type: ActionType.SET_USER,
  payload,
});


export {
  ActionType,
  requireAuthorization,
  setUser,
};
