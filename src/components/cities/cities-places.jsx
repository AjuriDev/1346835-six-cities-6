import React from 'react';
import {useSelector} from "react-redux";
import {getCurrentOffers} from "../../store/selectors";
import OffersList from '../offers/offers-list';
import PlacesSort from './places-sort';

const CitiesPlaces = () => {
  const {currentCity} = useSelector((state) => state.MAIN);
  const {currentOffers} = useSelector((state) => ({...getCurrentOffers(state)}));

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{ currentOffers.length } { currentOffers.length === 1 ? `place` : `places` } to stay in { currentCity }</b>
      <PlacesSort />
      <OffersList />
    </section>
  );
};

export default CitiesPlaces;

