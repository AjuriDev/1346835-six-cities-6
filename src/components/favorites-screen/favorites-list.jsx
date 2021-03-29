import React, {useEffect} from 'react';
import {makeItemsUniq} from '../../utils/common';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import FavoritesItem from './favorites-item';
import LoadingScreen from '../loading-screen/loading-screen';
import {offers as offersType} from '../../types';
import {fetchFavoriteOffers} from '../../store/api-actions';


const FavoritesList = ({favoriteOffers, isFavoriteOffersLoaded, onLoadFavoriteOffers}) => {
  useEffect(() => {
    if (!isFavoriteOffersLoaded) {
      onLoadFavoriteOffers();
    }
  }, [favoriteOffers]);

  if (!isFavoriteOffersLoaded) {
    return (
      <LoadingScreen />
    );
  }

  const isFavoritesEmpty = favoriteOffers.length === 0;

  const cities = makeItemsUniq(
      favoriteOffers.map((offer) => offer.city.name)
  );

  return (
    <section className={`favorites${isFavoritesEmpty ? `favorites--empty` : ``}`}>
      <h1 className={`${isFavoritesEmpty ? `visually-hidden` : `favorites__title`}`}>
        {`${isFavoritesEmpty ? `Favorites (empty)` : `Saved listing`}`}Saved listing
      </h1>
      {isFavoritesEmpty ?
        <div className="favorites__status-wrapper">
          <b className="favorites__status">Nothing yet saved.</b>
          <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
        </div> :
        <ul className="favorites__list">
          {cities.map((city, i) => <FavoritesItem key={`${city}-${i}`} offers={favoriteOffers} city={city} />)}
        </ul>
      }
    </section>
  );
};

FavoritesList.propTypes = {
  favoriteOffers: offersType,
  isFavoriteOffersLoaded: PropTypes.bool.isRequired,
  onLoadFavoriteOffers: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  favoriteOffers: state.favoriteOffers,
  isFavoriteOffersLoaded: state.isFavoriteOffersLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadFavoriteOffers() {
    dispatch(fetchFavoriteOffers());
  },
});

export {FavoritesList};
export default connect(mapStateToProps, mapDispatchToProps)(FavoritesList);
