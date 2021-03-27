import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import CitiesPlaces from '../cities/cities-places';
import NoPlaces from '../cities/no-places';
import Map from '../map/map';
import LocationsList from '../locations/locations-list';
import {offers as offersType, user as userType} from '../../types';
import LoadingScreen from '../loading-screen/loading-screen';
import {fetchOffers} from '../../store/api-actions';
import {AuthorizationStatus} from '../../const';

const MainScreen = ({authorizationStatus, user, currentOffers, isDataLoaded, onLoadData}) => {

  useEffect(() => {
    if (!isDataLoaded) {
      onLoadData();
    }
  }, [isDataLoaded]);

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  const isNoPlaces = currentOffers.length === 0;
  const mainPageClass = isNoPlaces
    ? `page__main page__main--index page__main--index-empty`
    : `page__main page__main--index`;
  const containerClass = isNoPlaces
    ? `cities__places-container cities__places-container--empty container`
    : `cities__places-container container`;

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link header__logo-link--active" to="/">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  {
                    authorizationStatus === AuthorizationStatus.AUTH ?
                      <Link className="header__nav-link header__nav-link--profile" to="/favorites">
                        <div className="header__avatar-wrapper user__avatar-wrapper">
                        </div>
                        <span className="header__user-name user__name">
                          { user.name }
                        </span>
                      </Link> :
                      <Link className="header__nav-link header__nav-link--profile" to="/login">
                        <div className="header__avatar-wrapper user__avatar-wrapper">
                        </div>
                        <span className="header__login">Sign in</span>
                      </Link>
                  }
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className={mainPageClass}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationsList />
          </section>
        </div>
        <div className="cities">
          <div className={containerClass}>
            {isNoPlaces ? <NoPlaces /> : <CitiesPlaces />}
            <div className="cities__right-section">
              {
                !isNoPlaces && (
                  <section className="cities__map map">
                    <Map />
                  </section>
                )
              }
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

MainScreen.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  user: userType,
  currentOffers: offersType,
  isDataLoaded: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  user: state.user,
  currentOffers: state.currentOffers,
  isDataLoaded: state.isDataLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  onUserAnswer(question, answer) {
    dispatch(ActionCreator.incrementStep());
    dispatch(ActionCreator.incrementMistake(question, answer));
  },
  onLoadData() {
    dispatch(fetchOffers());
  },
});

export {MainScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
