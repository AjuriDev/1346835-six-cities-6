const ActionType = {
  REDIRECT_TO_ROUTE: `routing/redirectToRoute`,
};

const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});

export {
  ActionType,
  redirectToRoute,
};
