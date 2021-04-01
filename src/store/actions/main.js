import {createAction} from '@reduxjs/toolkit';

const ActionType = {
  CHANGE_CITY: `main/changeCity`,
  CHANGE_SORT_TYPE: `main/changeSortType`,
  CHANGE_ACTIVE_OFFER_ID: `main/changeActiveOfferID`,
  RESET_ACTIVE_OFFER_ID: `main/resetActiveOfferID`,
};

const changeCity = createAction(
    ActionType.CHANGE_CITY,
    (payload) => ({payload})
);

const changeSortType = createAction(
    ActionType.CHANGE_SORT_TYPE,
    (payload) => ({payload})
);

const changeActiveOfferID = createAction(
    ActionType.CHANGE_ACTIVE_OFFER_ID,
    (payload) => ({payload})
);

const resetActiveOfferID = createAction(
    ActionType.RESET_ACTIVE_OFFER_ID,
    (payload) => ({payload})
);

export {
  ActionType,
  changeCity,
  changeSortType,
  changeActiveOfferID,
  resetActiveOfferID,
};
