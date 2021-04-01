const ActionType = {
  CHANGE_CITY: `main/changeCity`,
  CHANGE_SORT_TYPE: `main/changeSortType`,
  CHANGE_ACTIVE_OFFER_ID: `main/changeActiveOfferID`,
  RESET_ACTIVE_OFFER_ID: `main/resetActiveOfferID`,
};

const changeCity = (payload) => ({
  type: ActionType.CHANGE_CITY,
  payload
});

const changeSortType = (payload) => ({
  type: ActionType.CHANGE_SORT_TYPE,
  payload
});

const changeActiveOfferID = (payload) => ({
  type: ActionType.CHANGE_ACTIVE_OFFER_ID,
  payload
});

const resetActiveOfferID = () => ({
  type: ActionType.RESET_ACTIVE_OFFER_ID
});

export {
  ActionType,
  changeCity,
  changeSortType,
  changeActiveOfferID,
  resetActiveOfferID,
};
