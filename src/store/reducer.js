import {ActionType} from './action';
import {DEFAULT_CITY, SortType} from '../const';
import offers from '../mocks/offers';
import {filterOffersByCity, sortOffersByOption} from '../utils/offers';

const initialState = {
  offers,
  currentCity: DEFAULT_CITY,
  currentOffers: filterOffersByCity(offers, DEFAULT_CITY),
  currentSortType: SortType.POPULAR,
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

    case ActionType.UPDATE_OFFERS:
      return {
        ...state,
        currentOffers: action.payload
      };

    default:
      return state;
  }
};


export {reducer};
