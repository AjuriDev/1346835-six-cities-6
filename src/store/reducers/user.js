import {createReducer} from "@reduxjs/toolkit";
import {requireAuthorization, setUser} from "../actions/user";
import {DEFAULT_USER, AuthorizationStatus} from '../../const';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  user: DEFAULT_USER,
};

const user = createReducer(initialState, (builder) => {
  builder.addCase(requireAuthorization, (state, action) => {
    state.authorizationStatus = action.payload;
  });

  builder.addCase(setUser, (state, action) => {
    state.user = action.payload;
  });
});

export {user};
