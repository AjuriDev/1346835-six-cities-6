import React from 'react';
import PropTypes from 'prop-types';
import {cityNames} from '../../const';

const LocationsList = ({cityName, setCityName}) => {
  const onLocationsListSelect = (evt) => {
    evt.preventDefault();

    const target = evt.target.closest(`.locations__item`);

    if (target !== null) {
      setCityName(target.textContent);
    }
  };

  return (
    <ul className="locations__list tabs__list" onClick={onLocationsListSelect}>
      {cityNames.map((city, i) => (
        <li key={`${city}-${i}`} className="locations__item">
          <a
            className={`locations__item-link tabs__item${city === cityName ? ` tabs__item--active` : ``}`}
            href="#"
          >
            <span>{ city }</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

LocationsList.propTypes = {
  cityName: PropTypes.string.isRequired,
  setCityName: PropTypes.func.isRequired,
};

export default LocationsList;
