export const ActionType = {
  CHANGE_CITY: `main/changeCity`,
  CHANGE_SORT_TYPE: `main/changeSortType`,
  CHANGE_ACTIVE_OFFER_ID: `offer/changeActiveOfferID`,
  RESET_ACTIVE_OFFER_ID: `offer/resetActiveOfferID`,
  UPDATE_OFFERS: `server/updateOffers`,
  LOAD_OFFERS: `server/loadOffers`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
};

export const ActionCreator = {
  changeCity: (payload) => ({
    type: ActionType.CHANGE_CITY,
    payload
  }),
  changeSortType: (payload) => ({
    type: ActionType.CHANGE_SORT_TYPE,
    payload
  }),
  changeActiveOfferID: (payload) => ({
    type: ActionType.CHANGE_ACTIVE_OFFER_ID,
    payload
  }),
  resetActiveOfferID: () => ({
    type: ActionType.RESET_ACTIVE_OFFER_ID
  }),
  updateOffers: (payload) => ({
    type: ActionType.UPDATE_OFFERS,
    payload
  }),
  loadOffers: (payload) => ({
    type: ActionType.LOAD_OFFERS,
    payload
  }),
  requireAuthorization: (payload) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload,
  }),
};