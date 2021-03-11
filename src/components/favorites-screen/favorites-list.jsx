import React from 'react';
import FavoritesItem from './favorites-item';
import {makeItemsUniq} from '../../utils/common';
import {offers as offersType} from '../../types';

const FavoritesList = ({offers}) => {
  const cities = makeItemsUniq(offers
    .filter((offer) => offer.isFavorite === true)
    .map((offer) => offer.city.name));

  return (
    <ul className="favorites__list">
      {cities.map((city, i) => <FavoritesItem key={`${city}-${i}`} offers={offers} city={city} />)}
    </ul>
  );
};

FavoritesList.propTypes = {
  offers: offersType,
};

export default FavoritesList;
