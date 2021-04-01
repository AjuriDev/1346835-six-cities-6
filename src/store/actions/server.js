import {createAction} from '@reduxjs/toolkit';

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

const runOffersLoading = createAction(
    ActionType.RUN_OFFERS_LOADING,
);

const loadOffers = createAction(
    ActionType.LOAD_OFFERS,
    (payload) => ({payload})
);

const runOfferLoading = createAction(
    ActionType.RUN_OFFER_LOADING,
);

const loadOffer = createAction(
    ActionType.LOAD_OFFER,
    (payload) => ({payload})
);

const runNearbyOffersLoading = createAction(
    ActionType.RUN_NEARBY_OFFERS_LOADING,
);

const loadNearbyOffers = createAction(
    ActionType.LOAD_NEARBY_OFFERS,
    (payload) => ({payload})
);

const runFavoriteOffersLoading = createAction(
    ActionType.RUN_FAVORITE_OFFERS_LOADING,
);

const loadFavoriteOffers = createAction(
    ActionType.LOAD_FAVORITE_OFFERS,
    (payload) => ({payload})
);

const updateFavoriteStatus = createAction(
    ActionType.UPDATE_FAVORITE_STATUS,
    (payload) => ({payload})
);

const runReviewsLoading = createAction(
    ActionType.RUN_REVIEWS_LOADING,
);

const loadReviews = createAction(
    ActionType.LOAD_REVIEWS,
    (payload) => ({payload})
);

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

