import {ActionCreator} from "./action";
import {adaptOfferToClient, adaptUserToClient} from "./adapter";
import {AuthorizationStatus} from "../const";

export const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => dispatch(ActionCreator.loadOffers(data
      .map((offer) => adaptOfferToClient(offer)))))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
  .then(({data}) => {
    dispatch(ActionCreator.setUser(adaptUserToClient(data)));
    dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
  })
  .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(({data}) => {
      dispatch(ActionCreator.setUser(adaptUserToClient(data)));
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
    })
);
