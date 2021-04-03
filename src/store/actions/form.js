import {createAction} from '@reduxjs/toolkit';

const ActionType = {
  SET_REVIEW_SENDING: `form/setReviewSending`,
};

const setReviewSending = createAction(
    ActionType.SET_REVIEW_SENDING,
    (payload) => ({payload})
);

export {
  ActionType,
  setReviewSending,
};
