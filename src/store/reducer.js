import {ActionType} from './action';
import {DEFAULT_CITY, DEFAULT_OFFER, SortType, DEFAULT_USER, AuthorizationStatus} from '../const';
import {filterOffersByCity, filterOffersByFavorites, sortOffersByOption, updateFavoriteOffer} from '../utils/offers';
import {sortReviews} from '../utils/reviews';

const INITIAL_OFFER_ID = 0;

const initialState = {
  currentCity: DEFAULT_CITY,
  currentOffers: [],
  currentSortType: SortType.POPULAR,
  activeOfferID: INITIAL_OFFER_ID,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  user: DEFAULT_USER,
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
  isReviewSending: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        currentCity: action.payload,
        currentOffers: filterOffersByCity(state.offers, action.payload),
        currentSortType: SortType.POPULAR,
      };

    case ActionType.CHANGE_SORT_TYPE:
      return {
        ...state,
        currentSortType: action.payload,
        currentOffers: sortOffersByOption(state.currentOffers, action.payload)
      };

    case ActionType.CHANGE_ACTIVE_OFFER_ID:
      return {
        ...state,
        activeOfferID: action.payload
      };

    case ActionType.RESET_ACTIVE_OFFER_ID:
      return {
        ...state,
        activeOfferID: INITIAL_OFFER_ID
      };

    case ActionType.RUN_OFFERS_LOADING:
      return {
        ...state,
        isOffersLoaded: false,
      };

    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload,
        currentOffers: filterOffersByCity(action.payload, state.currentCity),
        isOffersLoaded: true,
      };

    case ActionType.RUN_OFFER_LOADING:
      return {
        ...state,
        isOfferLoaded: false,
      };

    case ActionType.LOAD_OFFER:
      return {
        ...state,
        currentOffer: action.payload,
        isOfferLoaded: true,
      };

    case ActionType.RUN_NEARBY_OFFERS_LOADING:
      return {
        ...state,
        isNearbyOffersLoaded: false,
      };

    case ActionType.LOAD_NEARBY_OFFERS:
      return {
        ...state,
        nearbyOffers: action.payload,
        isNearbyOffersLoaded: true,
      };

    case ActionType.RUN_FAVORITE_OFFERS_LOADING:
      return {
        ...state,
        isFavoriteOffersLoaded: false,
      };

    case ActionType.LOAD_FAVORITE_OFFERS:
      return {
        ...state,
        favoriteOffers: action.payload,
        isFavoriteOffersLoaded: true,
      };

    case ActionType.UPDATE_FAVORITE_STATUS:
      return {
        ...state,
        currentOffer: action.payload,
        offers: updateFavoriteOffer(state.offers, action.payload),
        nearbyOffers: updateFavoriteOffer(state.nearbyOffers, action.payload),
        currentOffers: updateFavoriteOffer(state.currentOffers, action.payload),
        favoriteOffers: filterOffersByFavorites(updateFavoriteOffer(state.favoriteOffers, action.payload)),
        isFavoriteOffersLoaded: false,
      };

    case ActionType.RUN_REVIEWS_LOADING:
      return {
        ...state,
        isReviewsLoaded: false,
      };

    case ActionType.LOAD_REVIEWS:
      return {
        ...state,
        currentReviews: sortReviews(action.payload),
        isReviewsLoaded: true,
      };

    case ActionType.SET_REVIEW_SENDING:
      return {
        ...state,
        isReviewSending: action.payload,
      };

    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };

    case ActionType.SET_USER:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};


export {reducer};
