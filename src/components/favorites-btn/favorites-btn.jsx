import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {switchFavoriteStatus} from '../../store/api-actions';

const FavoritesBtnBlocks = {
  PLACE_CARD: `place-card`,
  PROPERTY: `property`,
};

const FavoritesIconSizes = {
  SMALL: {
    WIDTH: 18,
    HEIGHT: 19,
  },
  MEDIUM: {
    WIDTH: 31,
    HEIGHT: 33,
  }
};

const FavoritesBtn = ({offerID, isFavorite, className, onFaviritesBtnClick}) => {
  const handleFavoritesSwitch = (evt) => {
    evt.preventDefault();

    onFaviritesBtnClick(offerID, +!isFavorite);
  };

  const iconSize = className === FavoritesBtnBlocks.PLACE_CARD ? FavoritesIconSizes.SMALL : FavoritesIconSizes.MEDIUM;

  return (
    <button
      className={ `${isFavorite ? `${className}__bookmark-button--active` : ``} ${className}__bookmark-button button` }
      type="button"
      onClick={handleFavoritesSwitch}
    >
      <svg className={`${className}__bookmark-icon`} width={iconSize.WIDTH} height={iconSize.HEIGHT}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
};

FavoritesBtn.propTypes = {
  offerID: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
  onFaviritesBtnClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onFaviritesBtnClick(id, status) {
    dispatch(switchFavoriteStatus(id, status));
  },
});

export {FavoritesBtn};
export default connect(null, mapDispatchToProps)(FavoritesBtn);
