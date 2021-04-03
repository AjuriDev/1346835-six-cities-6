import {
  runOffersLoading,
  loadOffers,
  runOfferLoading,
  loadOffer,
  runNearbyOffersLoading,
  loadNearbyOffers,
  runFavoriteOffersLoading,
  loadFavoriteOffers,
  updateFavoriteStatus,
  runReviewsLoading,
  loadReviews,
} from './actions/server';
import {requireAuthorization, setUser} from './actions/user';
import {redirectToRoute} from './actions/routing';
import {setReviewSending} from './actions/form';
import {adaptOfferToClient, adaptUserToClient, adaptReviewToClient} from "./adapter";
import {AuthorizationStatus, AppRoute, APIRoute, DEFAULT_USER} from "../const";

const fetchOffers = () => (dispatch, _getState, api) => {
  dispatch(runOffersLoading());

  api.get(APIRoute.OFFERS)
    .then(({data}) => dispatch(loadOffers(
        data.map((offer) => adaptOfferToClient(offer))
    )))
    .catch(() => {});
};

const fetchOffer = (id) => (dispatch, _getState, api) => {
  dispatch(runOfferLoading());

  api.get(`${APIRoute.OFFERS}/${id}`)
    .then(({data}) => dispatch(loadOffer(adaptOfferToClient(data))))
    .catch(() => {});
};

const fetchNearbyOffers = (id) => (dispatch, _getState, api) => {
  dispatch(runNearbyOffersLoading());

  api.get(`${APIRoute.OFFERS}/${id}${APIRoute.NEARBY}`)
    .then(({data}) => dispatch(loadNearbyOffers(
        data.map((offer) => adaptOfferToClient(offer))
    )))
    .catch(() => {});
};

const fetchFavoriteOffers = () => (dispatch, _getState, api) => {
  dispatch(runFavoriteOffersLoading());

  api.get(APIRoute.FAVORITE)
    .then(({data}) => dispatch(loadFavoriteOffers(
        data.map((offer) => adaptOfferToClient(offer))
    )))
    .catch(() => {});
};

const switchFavoriteStatus = (id, status) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.FAVORITE}/${id}/${status}`)
    .then(({data}) => dispatch(updateFavoriteStatus(adaptOfferToClient(data))))
    .catch(() => dispatch(redirectToRoute(AppRoute.LOGIN)))
);

const fetchReviews = (id) => (dispatch, _getState, api) => {
  dispatch(runReviewsLoading());

  api.get(`${APIRoute.REVIEWS}/${id}`)
    .then(({data}) => dispatch(loadReviews(
        data.map((review) => adaptReviewToClient(review))
    )))
    .catch(() => {});
};

const sendReview = (id, review) => (dispatch, _getState, api) => {
  dispatch(setReviewSending(true));

  api.post(`${APIRoute.REVIEWS}/${id}`, review)
  .then(({data}) => {
    dispatch(setReviewSending(false));
    dispatch(loadReviews(data.map((item) => adaptReviewToClient(item))));
  })
  .catch(() => {
    dispatch(setReviewSending(false));
    // eslint-disable-next-line no-alert
    alert(`Не удалось отправить отзыв, попробуйте еще раз`);
  });
};

const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => dispatch(setUser(adaptUserToClient(data))))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => dispatch(setUser(adaptUserToClient(data))))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.ROOT)))
    .catch(() => {})
);

const logout = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGOUT)
    .then(() => dispatch(setUser(DEFAULT_USER)))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)))
    .catch(() => {})
);

export {
  fetchOffers,
  fetchOffer,
  fetchNearbyOffers,
  fetchFavoriteOffers,
  switchFavoriteStatus,
  fetchReviews,
  sendReview,
  checkAuth,
  login,
  logout,
};
