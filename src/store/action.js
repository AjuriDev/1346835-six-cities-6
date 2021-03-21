export const ActionType = {
  CHANGE_CITY: `main/changeCity`,
  UPDATE_OFFERS: `server/updateOffers`,
};

export const ActionCreator = {
  changeCity: (payload) => ({
    type: ActionType.CHANGE_CITY,
    payload
  }),
  updateOffers: (payload) => ({
    type: ActionType.UPDATE_OFFERS,
    payload
  })
};
