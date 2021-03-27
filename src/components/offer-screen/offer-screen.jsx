import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {calcRatingProgress} from '../../utils/offers.js';
import ReviewsBlock from '../reviews/reviews-block';
import NearOffersList from './near-offers-list';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import {offers as offersType} from '../../types';
import Map from '../map/map';
import {AppRoute} from '../../const';

const OfferScreen = ({offers, match: {params: {id}}}) => {
  const idInt = parseInt(id, 10);
  const offer = offers.find((item) => item.id === idInt);
  const city = offer.city.location;
  const nearOffers = offers.slice(0, 3); // Временное решение пока данные не придут с сервера
  const points = nearOffers.map((nearOffer) => {
    return {
      lat: nearOffer.location.latitude,
      lng: nearOffer.location.longitude,
      title: nearOffer.title
    };
  });

  if (!offer) {
    return <NotFoundScreen />;
  }

  const {
    bedrooms,
    description,
    goods,
    host,
    images,
    isFavorite,
    isPremium,
    maxAdults,
    price,
    rating,
    reviews,
    title,
    type,
  } = offer;

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to={AppRoute.ROOT}>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={AppRoute.FAVORITES}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">
                      Oliver.conner@gmail.com
                    </span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {
                images.map((image, i) => {
                  return (
                    <div key={`${image}-${i}`} className="property__image-wrapper">
                      <img className="property__image" src={image} alt="Photo studio" />
                    </div>
                  );
                })
              }
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              { isPremium
                ? (
                  <div className="property__mark">
                    <span>Premium</span>
                  </div>)
                : ``
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  { title }
                </h1>
                <button className={ isFavorite ? `property__bookmark-button button property__bookmark-button--active` : `property__bookmark-button button` } type="button">
                  <svg className="property__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: calcRatingProgress(rating)}} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{ rating }</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  { type }
                </li>
                <li className="property__feature property__feature--bedrooms">
                  { bedrooms } Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max { maxAdults } adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">€{ price }</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {
                    goods.map((good, i) => {
                      return (
                        <li key={`${good}-${i}`} className="property__inside-item">
                          { good }
                        </li>
                      );
                    })
                  }
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={host.avatarUrl} width={74} height={74} alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    { host.name }
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    { description }
                  </p>
                  <p className="property__text">
                    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>
              <ReviewsBlock reviews={reviews} />
            </div>
          </div>
          <section className="property__map map">
            <Map city={city} points={points} />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <NearOffersList offers={nearOffers} />
          </section>
        </div>
      </main>
    </div>
  );
};

OfferScreen.propTypes = {
  offers: offersType,
  match: PropTypes.object.isRequired,
};

export default OfferScreen;
