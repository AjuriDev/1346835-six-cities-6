const ActionType = {
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
};


const runOffersLoading = () => ({
  type: ActionType.RUN_OFFERS_LOADING,
});
const loadOffers = (payload) => ({
  type: ActionType.LOAD_OFFERS,
  payload
});

const runOfferLoading = () => ({
  type: ActionType.RUN_OFFER_LOADING,
});

const loadOffer = (payload) => ({
  type: ActionType.LOAD_OFFER,
  payload
});

const runNearbyOffersLoading = () => ({
  type: ActionType.RUN_NEARBY_OFFERS_LOADING,
});

const loadNearbyOffers = (payload) => ({
  type: ActionType.LOAD_NEARBY_OFFERS,
  payload
});

const runFavoriteOffersLoading = () => ({
  type: ActionType.RUN_FAVORITE_OFFERS_LOADING,
});

const loadFavoriteOffers = (payload) => ({
  type: ActionType.LOAD_FAVORITE_OFFERS,
  payload
});

const updateFavoriteStatus = (payload) => ({
  type: ActionType.UPDATE_FAVORITE_STATUS,
  payload
});

const runReviewsLoading = () => ({
  type: ActionType.RUN_REVIEWS_LOADING,
});

const loadReviews = (payload) => ({
  type: ActionType.LOAD_REVIEWS,
  payload
});

export {
  ActionType,
  runOffersLoading,
  loadOffers,
  runOfferLoading,
  loadOffer,
  runNearbyOffersLoading,
  loadNearbyOffers,
  runFavoriteOffersLoading,
  loadFavoriteOffers,
  updateFavoriteStatus,
  runReviewsLoading,
  loadReviews,
};

