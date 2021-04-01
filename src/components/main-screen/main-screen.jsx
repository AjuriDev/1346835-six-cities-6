import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import Header from '../layout/header';
import CitiesPlaces from '../cities/cities-places';
import NoPlaces from '../cities/no-places';
import Map from '../map/map';
import LocationsList from '../locations/locations-list';
import LoadingScreen from '../loading-screen/loading-screen';
import {fetchOffers} from '../../store/api-actions';
import {getCurrentOffers} from "../../store/selectors";

const MainScreen = () => {
  const {currentOffers} = useSelector((state) => ({...getCurrentOffers(state)}));
  const {isOffersLoaded} = useSelector((state) => state.SERVER);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isOffersLoaded) {
      dispatch(fetchOffers());
    }
  }, [isOffersLoaded]);

  if (!isOffersLoaded) {
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
      <Header />
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
                    <Map offers={currentOffers} />
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

export default MainScreen;
