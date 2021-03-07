import React from 'react';
import PropTypes from 'prop-types';
import FavoritesOffer from './favorites-offer';

const FavoritesItem = ({offers, city}) => {
  offers = offers.filter((offer) => offer.city.name === city);

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
        {offers.map((offer) => <FavoritesOffer key={offer.id} offer={offer}/>)}
      </div>
    </li>
  );
};

FavoritesItem.propTypes = {
  offers: PropTypes.array.isRequired,
  city: PropTypes.string.isRequired
};

export default FavoritesItem;
