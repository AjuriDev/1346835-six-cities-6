const ActionType = {
  SET_REVIEW_SENDING: `form/setReviewSending`,
};

const setReviewSending = (payload) => ({
  type: ActionType.SET_REVIEW_SENDING,
  payload,
});

export {
  ActionType,
  setReviewSending,
};
