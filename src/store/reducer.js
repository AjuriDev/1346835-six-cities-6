import {ActionType} from './action';
import {DEFAULT_CITY} from '../const';
import offers from '../mocks/offers';
import {filterOffersByCity} from '../mocks/offers';

const initialState = {
  offers,
  currentCity: DEFAULT_CITY,
  currentOffers: filterOffersByCity(offers, DEFAULT_CITY),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        currentCity: action.payload,
        currentOffers: filterOffersByCity(offers, action.payload)
      };

    case ActionType.UPDATE_OFFERS:
      return {
        ...state,
        currentOffers: action.payload
      };
  }

  return state;
};


export {reducer};
