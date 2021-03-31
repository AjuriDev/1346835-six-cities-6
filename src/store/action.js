export const ActionType = {
  CHANGE_CITY: `main/changeCity`,
  CHANGE_SORT_TYPE: `main/changeSortType`,
  REDIRECT_TO_ROUTE: `main/redirectToRoute`,
  CHANGE_ACTIVE_OFFER_ID: `offer/changeActiveOfferID`,
  RESET_ACTIVE_OFFER_ID: `offer/resetActiveOfferID`,
  UPDATE_OFFERS: `server/updateOffers`,
  RUN_OFFERS_LOADING: `server/runOffersLoading`,
  LOAD_OFFERS: `server/loadOffers`,
  RUN_OFFER_LOADING: `server/runOfferLoading`,
  LOAD_OFFER: `server/loadOffer`,
  RUN_NEARBY_OFFERS_LOADING: `server/runNearbyOffersLoading`,
  LOAD_NEARBY_OFFERS: `server/loadNearbyOffers`,
  RUN_FAVORITE_OFFERS_LOADING: `server/runFavoriteOffersLoading`,
  LOAD_FAVORITE_OFFERS: `server/loadFavotiteOffers`,
  UPDATE_FAVORITE_STATUS: `server/updateFavoriteStatus`,
  RUN_REVIEWS_LOADING: `server/runReviewsLoading`,
  LOAD_REVIEWS: `server/reviews`,
  SET_REVIEW_SENDING: `server/setReviewSending`,
  REPORT_REVIEW_SEND: `server/reportReviewSend`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  SET_USER: `user/setUser`,
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
  runOffersLoading: () => ({
    type: ActionType.RUN_OFFERS_LOADING,
  }),
  loadOffers: (payload) => ({
    type: ActionType.LOAD_OFFERS,
    payload
  }),
  runOfferLoading: () => ({
    type: ActionType.RUN_OFFER_LOADING,
  }),
  loadOffer: (payload) => ({
    type: ActionType.LOAD_OFFER,
    payload
  }),
  runNearbyOffersLoading: () => ({
    type: ActionType.RUN_NEARBY_OFFERS_LOADING,
  }),
  loadNearbyOffers: (payload) => ({
    type: ActionType.LOAD_NEARBY_OFFERS,
    payload
  }),
  runFavoriteOffersLoading: () => ({
    type: ActionType.RUN_FAVORITE_OFFERS_LOADING,
  }),
  loadFavoriteOffers: (payload) => ({
    type: ActionType.LOAD_FAVORITE_OFFERS,
    payload
  }),
  updateFavoriteStatus: (payload) => ({
    type: ActionType.UPDATE_FAVORITE_STATUS,
    payload
  }),
  runReviewsLoading: () => ({
    type: ActionType.RUN_REVIEWS_LOADING,
  }),
  loadReviews: (payload) => ({
    type: ActionType.LOAD_REVIEWS,
    payload
  }),
  setReviewSending: (payload) => ({
    type: ActionType.SET_REVIEW_SENDING,
    payload,
  }),
  reportReviewSend: (payload) => ({
    type: ActionType.REPORT_REVIEW_SEND,
    payload
  }),
  requireAuthorization: (payload) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload,
  }),
  setUser: (payload) => ({
    type: ActionType.SET_USER,
    payload,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
};
