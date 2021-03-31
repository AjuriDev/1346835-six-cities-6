import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import {calcRatingProgress} from '../../utils/offers.js';
import {mixClass} from '../../utils/common';
import PropTypes from 'prop-types';
import {offer as offerType} from '../../types';
import {AppRoute} from '../../const';

const OfferBlocks = {
  CITIES: `cities`,
  FAVORITES: `favorites`,
  NEAR_PLACES: `near-places`,
};

const ImgSizes = {
  SMALL: {
    WIDTH: 150,
    HEIGHT: 110,
  },
  MEDIUM: {
    WIDTH: 260,
    HEIGHT: 200,
  }
};

const Offer = ({offer, className, onMouseEnter, onMouseLeave}) => {
  const [block] = className.split(`__`);

  const getMixedClass = mixClass(block);

  const {
    id,
    isPremium,
    isFavorite,
    previewImage,
    price,
    rating,
    title,
    type,
  } = offer;

  const handleMouseEnter = () => {
    onMouseEnter(id);
  };

  const handleMouseLeave = () => {
    onMouseLeave();
  };

  const isRenderPremium = isPremium && block === OfferBlocks.CITIES;
  const imgSize = block === OfferBlocks.FAVORITES ? ImgSizes.SMALL : ImgSizes.MEDIUM;

  return (
    <article
      className={`${className} place-card`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      { isRenderPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>)
      }
      <div className={`${getMixedClass(`__image-wrapper`)} place-card__image-wrapper`}>
        <Link to={`${AppRoute.OFFER}/${id}`}>
          <img className="place-card__image" src={ previewImage } width={imgSize.WIDTH} height={imgSize.HEIGHT} alt="Place image"/>
        </Link>
      </div>
      <div className={`${getMixedClass(`__card-info`)} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{ price }</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={ isFavorite ? `place-card__bookmark-button button place-card__bookmark-button--active` : `place-card__bookmark-button button` } type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: calcRatingProgress(Math.round(rating))}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.OFFER}/${id}`}>
            { title }
          </Link>
        </h2>
        <p className="place-card__type">{ type }</p>
      </div>
    </article>
  );
};

Offer.propTypes = {
  offer: offerType,
  className: PropTypes.string,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onMouseEnter(id) {
    dispatch(ActionCreator.changeActiveOfferID(id));
  },
  onMouseLeave() {
    dispatch(ActionCreator.resetActiveOfferID());
  },
});

export {Offer};
export default connect(null, mapDispatchToProps)(Offer);
