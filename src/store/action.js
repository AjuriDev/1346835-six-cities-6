export const ActionType = {
  CHANGE_CITY: `main/changeCity`,
  CHANGE_SORT_TYPE: `main/changeSortType`,
  UPDATE_OFFERS: `server/updateOffers`,
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
  updateOffers: (payload) => ({
    type: ActionType.UPDATE_OFFERS,
    payload
  })
};
