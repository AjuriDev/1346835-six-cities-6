import React from 'react';
import ReactDOM from 'react-dom';
import {createAPI} from "./services/api";
import {Provider} from 'react-redux';
import App from './components/app/app';
import reducer from './store/reducers/root-reducer';
import {configureStore} from '@reduxjs/toolkit';
import {ActionCreator} from './store/action';
import {checkAuth, fetchOffers} from "./store/api-actions";
import {AuthorizationStatus} from "./const";
import {redirect} from "./store/middlewares/redirect";

const api = createAPI(
    () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH))
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


