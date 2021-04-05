import React from 'react';
import ReactDOM from 'react-dom';
import {createAPI} from "./services/api";
import {Provider} from 'react-redux';
import App from './components/app/app';
import reducer from './store/reducers/root-reducer';
import {configureStore} from '@reduxjs/toolkit';
import {checkAuth, fetchOffers} from "./store/api-actions";
import {AppRoute, AuthorizationStatus} from "./const";
import {redirect} from "./store/middlewares/redirect";
import {requireAuthorization} from './store/actions/user';
import {redirectToRoute} from './store/actions/routing';

const api = createAPI(
    () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)),
    () => store.dispatch(redirectToRoute(AppRoute.NOT_FOUND)),
    () => {
      // eslint-disable-next-line no-alert
      alert(`Сервер недоступен, повторите запрос позже`);
    },
);

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      },
    }).concat(redirect)
});

store.dispatch(checkAuth());
store.dispatch(fetchOffers());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);


