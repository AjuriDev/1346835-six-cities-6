import React from 'react';
import {useHistory} from 'react-router-dom';
import PropTypes from 'prop-types';
import {calcRatingProgress} from '../../utils/offers.js';

const Offer = ({offer}) => {
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

  const history = useHistory();

  const onNavLinkClick = (evt) => {
    evt.preventDefault();
    history.push(`/offer/${id}`);
  };

  return (
    <>
      <article className="cities__place-card place-card">
        { isPremium
          ? (
            <div className="place-card__mark">
              <span>Premium</span>
            </div>)
          : ``
        }
        <div className="cities__image-wrapper place-card__image-wrapper">
          <a
            href="#"
            onClick={onNavLinkClick}
          >
            <img className="place-card__image" src={ previewImage } width="260" height="200" alt="Place image"/>
          </a>
        </div>
        <div className="place-card__info">
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
              <span style={{width: calcRatingProgress(rating)}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <a
              href="#"
              onClick={onNavLinkClick}
            >
              { title }
            </a>
          </h2>
          <p className="place-card__type">{ type }</p>
        </div>
      </article>
    </>
  );
};

Offer.propTypes = {
  offer: PropTypes.object.isRequired
};

export default Offer;
