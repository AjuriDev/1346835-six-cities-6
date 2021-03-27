import {ActionType} from './action';
import {DEFAULT_CITY, DEFAULT_OFFER, SortType, DEFAULT_USER, AuthorizationStatus} from '../const';
import {filterOffersByCity, sortOffersByOption} from '../utils/offers';

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

    case ActionType.UPDATE_OFFERS:
      return {
        ...state,
        currentOffers: action.payload
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
    case ActionType.RUN_REVIEWS_LOADING:
      return {
        ...state,
        isReviewsLoaded: false,
      };
    case ActionType.LOAD_REVIEWS:
      return {
        ...state,
        currentReviews: action.payload,
        isReviewsLoaded: true,
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
