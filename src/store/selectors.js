import {createSelector} from "reselect";
import {StoreNameSpace} from "../const";
import {filterOffersByCity, sortOffersByOption} from "../utils/offers";
import {sortReviews} from "../utils/reviews";

const getOffers = (state) => state[StoreNameSpace.SERVER].offers;

const getCurrentCity = (state) => state[StoreNameSpace.MAIN].currentCity;

const getCurrentSortType = (state) => state[StoreNameSpace.MAIN].currentSortType;

const getReviews = (state) => state[StoreNameSpace.SERVER].currentReviews;

const getCurrentOffer = (state) => state[StoreNameSpace.SERVER].currentOffer;

const getNearbyOffers = (state) => state[StoreNameSpace.SERVER].nearbyOffers;

const getCurrentOffers = createSelector([
  getOffers,
  getCurrentCity,
  getCurrentSortType,
], (offers, currentCity, currentSortType) => ({
  currentOffers: sortOffersByOption(filterOffersByCity(offers, currentCity), currentSortType)
}));

const getSortedReviews = createSelector([
  getReviews,
], (reviews) => ({
  currentReviews: sortReviews(reviews),
}));

const getNearbyWithCurrentOffers = createSelector([
  getCurrentOffer,
  getNearbyOffers,
], (currentOffer, nearbyOffers) => ({
  nearbyWithCurrentOffers: [...nearbyOffers, currentOffer],
}));

export {
  getCurrentOffers,
  getSortedReviews,
  getNearbyWithCurrentOffers,
};
