import React from 'react';
import PropTypes from 'prop-types';
import {cityNames} from '../../const';

const LocationsList = ({selectedCity, changeCity}) => {
  const handleCityTabClick = (city) => (evt) => {
    evt.preventDefault();
    changeCity(city);
  };

  return (
    <ul className="locations__list tabs__list">
      {cityNames.map((city, i) => (
        <li key={`${city}-${i}`} className="locations__item">
          <a
            className={`locations__item-link tabs__item${city === selectedCity ? ` tabs__item--active` : ``}`}
            href="#"
            onClick={handleCityTabClick(city)}
          >
            <span>{ city }</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

LocationsList.propTypes = {
  selectedCity: PropTypes.string.isRequired,
  changeCity: PropTypes.func.isRequired,
};

export default LocationsList;
