import React from 'react';
import PropTypes from 'prop-types';
import FavoritesItem from './favorites-item';
import {makeItemsUniq} from '../../utils/common';

const FavoritesList = ({offers}) => {
  offers = offers.filter((offer) => offer.isFavorite === true);
  const cities = makeItemsUniq(offers.map((offer) => offer.city.name));

  return (
    <ul className="favorites__list">
      {cities.map((city, i) => <FavoritesItem key={`${city}-${i}`} offers={offers} city={city} />)}
    </ul>
  );
};

FavoritesList.propTypes = {
  offers: PropTypes.array.isRequired
};

export default FavoritesList;
