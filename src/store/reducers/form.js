import {createReducer} from "@reduxjs/toolkit";
import {setReviewSending} from "../actions/form";

const initialState = {
  isReviewSending: false,
};

const form = createReducer(initialState, (builder) => {
  builder.addCase(setReviewSending, (state, action) => {
    state.isReviewSending = action.payload;
  });
});

export {form};
