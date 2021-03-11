import React from 'react';
import PropTypes from 'prop-types';
import FavoritesOffer from './favorites-offer';
import {offers as offersType} from '../../types';

const FavoritesItem = ({offers, city}) => {
  const filteredOffers = offers.filter((offer) => offer.city.name === city);

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{ city }</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {filteredOffers.map((offer) => <FavoritesOffer key={offer.id} offer={offer}/>)}
      </div>
    </li>
  );
};

FavoritesItem.propTypes = {
  offers: offersType,
  city: PropTypes.string.isRequired
};

export default FavoritesItem;
