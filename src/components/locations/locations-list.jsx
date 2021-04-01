import React from 'react';
import {connect} from 'react-redux';
import {changeCity} from '../../store/actions/main';
import PropTypes from 'prop-types';
import {CITY_NAMES} from '../../const';

const LocationsList = ({currentCity, onCityChange}) => {
  const handleCityTabClick = (city) => (evt) => {
    evt.preventDefault();
    onCityChange(city);
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

LocationsList.propTypes = {
  currentCity: PropTypes.string.isRequired,
  onCityChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentCity: state.currentCity
});

const mapDispatchToProps = (dispatch) => ({
  onCityChange(city) {
    dispatch(changeCity(city));
  },
});

export {LocationsList};
export default connect(mapStateToProps, mapDispatchToProps)(LocationsList);
