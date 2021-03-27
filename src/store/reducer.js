import {ActionType} from './action';
import {DEFAULT_CITY, SortType, AuthorizationStatus} from '../const';
import offers from '../mocks/offers';
import {filterOffersByCity, sortOffersByOption} from '../utils/offers';

const INITIAL_OFFER_ID = 0;

const initialState = {
  offers: [],
  currentCity: DEFAULT_CITY,
  currentOffers: filterOffersByCity(offers, DEFAULT_CITY),
  currentSortType: SortType.POPULAR,
  activeOfferID: INITIAL_OFFER_ID,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        currentCity: action.payload,
        currentOffers: filterOffersByCity(offers, action.payload),
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
    case ActionType.LOAD_OFFERSS:
      return {
        ...state,
        offers: action.payload,
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };

    default:
      return state;
  }
};


export {reducer};
