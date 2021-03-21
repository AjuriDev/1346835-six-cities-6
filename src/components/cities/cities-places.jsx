import React/* , {useState}*/ from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import OffersList from '../offers/offers-list';
import PlacesSort from './places-sort';
import {offers as offersType} from '../../types';

const CitiesPlaces = ({currentCity, currentOffers}) => {
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{ currentOffers.length } { currentOffers.length === 1 ? `place` : `places` } to stay in { currentCity }</b>
      <PlacesSort />
      <OffersList />
    </section>
  );
};

CitiesPlaces.propTypes = {
  currentCity: PropTypes.string.isRequired,
  currentOffers: offersType,
};

const mapStateToProps = (state) => ({
  currentCity: state.currentCity,
  currentOffers: state.currentOffers
});

export {CitiesPlaces};
export default connect(mapStateToProps, null)(CitiesPlaces);

