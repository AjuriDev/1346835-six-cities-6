import React from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import PropTypes from 'prop-types';
import {cityNames} from '../../const';

const LocationsList = ({currentCity, changeCity}) => {
  const handleCityTabClick = (city) => (evt) => {
    evt.preventDefault();
    changeCity(city);
  };

  return (
    <ul className="locations__list tabs__list">
      {cityNames.map((city, i) => (
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
  changeCity: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentCity: state.currentCity
});

const mapDispatchToProps = (dispatch) => ({
  changeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  },
});

export {LocationsList};
export default connect(mapStateToProps, mapDispatchToProps)(LocationsList);
