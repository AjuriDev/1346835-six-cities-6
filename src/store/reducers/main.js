import {createReducer} from "@reduxjs/toolkit";
import {
  changeCity,
  changeSortType,
  changeActiveOfferID,
  resetActiveOfferID,
} from "../actions/main.js";
import {DEFAULT_CITY, SortType} from '../../const';

const INITIAL_OFFER_ID = 0;

const initialState = {
  currentCity: DEFAULT_CITY,
  currentSortType: SortType.POPULAR,
  activeOfferID: INITIAL_OFFER_ID,
};

const main = createReducer(initialState, (builder) => {
  builder.addCase(changeCity, (state, action) => {
    state.currentCity = action.payload;
  });

  builder.addCase(changeSortType, (state, action) => {
    state.currentSortType = action.payload;
  });

  builder.addCase(changeActiveOfferID, (state, action) => {
    state.activeOfferID = action.payload;
  });

  builder.addCase(resetActiveOfferID, (state) => {
    state.activeOfferID = INITIAL_OFFER_ID;
  });
});

export {main};
