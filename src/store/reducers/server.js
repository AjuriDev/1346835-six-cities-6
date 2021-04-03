import {createReducer} from "@reduxjs/toolkit";
import {
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
} from "../actions/server";
import {DEFAULT_OFFER} from '../../const';
import {filterOffersByFavorites, updateFavoriteOffer} from '../../utils/offers';

const initialState = {
  isOffersLoaded: false,
  offers: [],
  isOfferLoaded: false,
  currentOffer: DEFAULT_OFFER,
  isNearbyOffersLoaded: false,
  nearbyOffers: [],
  isFavoriteOffersLoaded: false,
  favoriteOffers: [],
  isReviewsLoaded: false,
  currentReviews: [],
};

const server = createReducer(initialState, (builder) => {
  builder.addCase(runOffersLoading, (state) => {
    state.isOffersLoaded = false;
  });

  builder.addCase(loadOffers, (state, action) => {
    state.offers = action.payload;
    state.isOffersLoaded = true;
  });

  builder.addCase(runOfferLoading, (state) => {
    state.isOfferLoaded = false;
  });

  builder.addCase(loadOffer, (state, action) => {
    state.currentOffer = action.payload;
    state.isOfferLoaded = true;
  });

  builder.addCase(runNearbyOffersLoading, (state) => {
    state.isNearbyOffersLoaded = false;
  });

  builder.addCase(loadNearbyOffers, (state, action) => {
    state.nearbyOffers = action.payload;
    state.isNearbyOffersLoaded = true;
  });

  builder.addCase(runFavoriteOffersLoading, (state) => {
    state.isFavoriteOffersLoaded = false;
  });

  builder.addCase(loadFavoriteOffers, (state, action) => {
    state.favoriteOffers = action.payload;
    state.isFavoriteOffersLoaded = true;
  });

  builder.addCase(updateFavoriteStatus, (state, action) => {
    state.currentOffer = action.payload;
    state.offers = updateFavoriteOffer(state.offers, action.payload);
    state.nearbyOffers = updateFavoriteOffer(state.nearbyOffers, action.payload);
    state.favoriteOffers = filterOffersByFavorites(updateFavoriteOffer(state.favoriteOffers, action.payload));
  });

  builder.addCase(runReviewsLoading, (state) => {
    state.isReviewsLoaded = false;
  });

  builder.addCase(loadReviews, (state, action) => {
    state.currentReviews = action.payload;
    state.isReviewsLoaded = true;
  });
});

export {server};
