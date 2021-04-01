import {createSelector} from "reselect";
import {StoreNameSpace} from "../const";
import {filterOffersByCity, sortOffersByOption} from "../utils/offers";
import {sortReviews} from "../utils/reviews";

const getOffers = (state) => state[StoreNameSpace.SERVER].offers;

const getCurrentCity = (state) => state[StoreNameSpace.MAIN].currentCity;

const getCurrentSortType = (state) => state[StoreNameSpace.MAIN].currentSortType;

const getReviews = (state) => state[StoreNameSpace.SERVER].currentReviews;

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
  sortedReviews: sortReviews(reviews),
}));

export {
  getCurrentOffers,
  getSortedReviews,
};
