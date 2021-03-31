import React from 'react';
import PropTypes from 'prop-types';
import Offer from '../offers/offer';
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
        {filteredOffers.map((offer) => <Offer key={offer.id} offer={offer} className={`favorites__card`} />)}
      </div>
    </li>
  );
};

FavoritesItem.propTypes = {
  offers: offersType,
  city: PropTypes.string.isRequired
};

export default FavoritesItem;
