import {ActionCreator} from "./action";
import {adaptOfferToClient, adaptUserToClient, adaptReviewToClient} from "./adapter";
import {AuthorizationStatus, AppRoute, APIRoute, DEFAULT_USER} from "../const";

export const fetchOffers = () => (dispatch, _getState, api) => {
  dispatch(ActionCreator.runOffersLoading());

  api.get(APIRoute.OFFERS)
    .then(({data}) => dispatch(ActionCreator.loadOffers(
        data.map((offer) => adaptOfferToClient(offer))
    )))
    .catch(() => {});
};

export const fetchOffer = (id) => (dispatch, _getState, api) => {
  dispatch(ActionCreator.runOfferLoading());

  api.get(`${APIRoute.OFFERS}/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadOffer(adaptOfferToClient(data))))
    .catch(() => {});
};

export const fetchNearbyOffers = (id) => (dispatch, _getState, api) => {
  dispatch(ActionCreator.runNearbyOffersLoading());

  api.get(`${APIRoute.OFFERS}/${id}${APIRoute.NEARBY}`)
    .then(({data}) => dispatch(ActionCreator.loadNearbyOffers(
        data.map((offer) => adaptOfferToClient(offer))
    )))
    .catch(() => {});
};

export const fetchFavoriteOffers = () => (dispatch, _getState, api) => {
  dispatch(ActionCreator.runFavoriteOffersLoading());

  api.get(APIRoute.FAVORITE)
    .then(({data}) => dispatch(ActionCreator.loadFavoriteOffers(
        data.map((offer) => adaptOfferToClient(offer))
    )))
    .catch(() => {});
};

export const fetchReviews = (id) => (dispatch, _getState, api) => {
  dispatch(ActionCreator.runReviewsLoading());

  api.get(`${APIRoute.REVIEWS}/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadReviews(
        data.map((review) => adaptReviewToClient(review))
    )))
    .catch(() => {});
};

export const sendReview = (id, review) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.REVIEWS}/${id}`, review)
  .then(({data}) => dispatch(ActionCreator.loadReviews(
      data.map((item) => adaptReviewToClient(item))
  )))
  .catch(() => {})
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => dispatch(ActionCreator.setUser(adaptUserToClient(data))))
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => dispatch(ActionCreator.setUser(adaptUserToClient(data))))
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.ROOT)))
    .catch(() => {})
);

export const logout = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGOUT)
    .then(() => dispatch(ActionCreator.setUser(DEFAULT_USER)))
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)))
    .catch(() => {})
);
