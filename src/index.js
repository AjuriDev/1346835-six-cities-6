import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import {createAPI} from "./services/api";
import {Provider} from 'react-redux';
import {composeWithDevTools} from "redux-devtools-extension";
import App from './components/app/app';
import offers from './mocks/offers';
import {reducer} from './store/reducer';
import {ActionCreator} from './store/action';
import {checkAuth, fetchOffers} from "./store/api-actions";
import {AuthorizationStatus} from "./const";

const api = createAPI(
    () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(checkAuth());
store.dispatch(fetchOffers());

ReactDOM.render(
    <Provider store={store}>
      <App offers={offers} />
    </Provider>,
    document.querySelector(`#root`)
);


