import {ActionCreator} from "./action";
import {adaptOfferToClient, adaptUserToClient} from "./adapter";
import {AuthorizationStatus, AppRoute, APIRoute} from "../const";

export const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => dispatch(ActionCreator.loadOffers(data
      .map((offer) => adaptOfferToClient(offer)))))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
  .then(({data}) => {
    dispatch(ActionCreator.setUser(adaptUserToClient(data)));
    dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
  })
  .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      dispatch(ActionCreator.setUser(adaptUserToClient(data)));
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
    })
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.ROOT)))
);
