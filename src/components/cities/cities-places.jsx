import React/* , {useState}*/ from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import OffersList from '../offers/offers-list';
import {offers as offersType} from '../../types';

const CitiesPlaces = ({currentCity, currentOffers}) => {
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{ currentOffers.length } { currentOffers.length === 1 ? `place` : `places` } to stay in { currentCity }</b>
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex="0">
          Popular
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className="places__options places__options--custom places__options--opened">
          <li className="places__option places__option--active" tabIndex="0">Popular</li>
          <li className="places__option" tabIndex="0">Price: low to high</li>
          <li className="places__option" tabIndex="0">Price: high to low</li>
          <li className="places__option" tabIndex="0">Top rated first</li>
        </ul>
      </form>
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

