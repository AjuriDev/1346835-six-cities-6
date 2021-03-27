import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import PrivateRoute from '../private-route/private-route';
import MainScreen from '../main-screen/main-screen';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import OfferScreen from '../offer-screen/offer-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import {offers as offersType} from '../../types';

const App = (props) => {
  const {offers} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainScreen />
        </Route>
        <Route exact path="/login">
          <LoginScreen />
        </Route>
        <PrivateRoute exact
          path="/favorites"
          render={() => <FavoritesScreen />}
        >
        </PrivateRoute>
        {/* <Route exact path="/favorites">
          <FavoritesScreen
            offers={offers}
          />
        </Route> */}
        <Route exact path="/offer/:id" render={(offerProps) => <OfferScreen offers={offers} {...offerProps}/>} />
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: offersType,
};

export default App;
