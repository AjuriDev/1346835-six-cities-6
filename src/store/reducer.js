import {ActionType} from './action';
import {DEFAULT_CITY, SortType, DEFAULT_USER, AuthorizationStatus} from '../const';
import {filterOffersByCity, sortOffersByOption} from '../utils/offers';

const INITIAL_OFFER_ID = 0;

const initialState = {
  offers: [],
  currentCity: DEFAULT_CITY,
  currentOffers: [],
  currentSortType: SortType.POPULAR,
  activeOfferID: INITIAL_OFFER_ID,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  user: DEFAULT_USER,
  isDataLoaded: false,
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
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload,
        currentOffers: filterOffersByCity(action.payload, state.currentCity),
        isDataLoaded: true,
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        // user: action.payload,
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
