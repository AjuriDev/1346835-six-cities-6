import React from 'react';
import {useDispatch} from "react-redux";
import {Link} from 'react-router-dom';
import {changeActiveOfferID, resetActiveOfferID} from "../../store/actions/main";
import FavoritesBtn from '../favorites-btn/favorites-btn';
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

const Offer = ({offer, className}) => {
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

  const dispatch = useDispatch();

  const handleMouseEnter = () => {
    dispatch(changeActiveOfferID(id));
  };

  const handleMouseLeave = () => {
    dispatch(resetActiveOfferID());
  };

  const [block] = className.split(`__`);

  const getMixedClass = mixClass(block);

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
          <FavoritesBtn offerID={id} isFavorite={isFavorite} className={`place-card`} />
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
};

export default Offer;
