import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {changeCity} from '../../store/actions/main';
import {CITY_NAMES} from '../../const';

const LocationsList = () => {
  const {currentCity} = useSelector((state) => state.MAIN);

  const dispatch = useDispatch();

  const handleCityTabClick = (city) => (evt) => {
    evt.preventDefault();
    dispatch(changeCity(city));
  };

  return (
    <ul className="locations__list tabs__list">
      {CITY_NAMES.map((city, i) => (
        <li key={`${city}-${i}`} className="locations__item">
          <a
            className={`locations__item-link tabs__item${city === currentCity ? ` tabs__item--active` : ``}`}
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

export default LocationsList;
