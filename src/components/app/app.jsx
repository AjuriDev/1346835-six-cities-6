import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import MainScreen from '../main-screen/main-screen';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import OfferScreen from '../offer-screen/offer-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';

const App = (props) => {
  const {cardsCount} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainScreen cardsCount={cardsCount} />
        </Route>
        <Route exact path="/login">
          <LoginScreen />
        </Route>
        <Route exact path="/favorites">
          <FavoritesScreen />
        </Route>
        <Route exact path="/offer/:id">
          <OfferScreen />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  cardsCount: PropTypes.number.isRequired,
};

export default App;
