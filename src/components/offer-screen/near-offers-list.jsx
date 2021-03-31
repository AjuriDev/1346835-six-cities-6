import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Offer from '../offers/offer.jsx';
import {offers as offersType} from '../../types';

const NearOffersList = ({nearbyOffers, isNearbyOffersLoaded}) => {

  if (!isNearbyOffersLoaded) {
    return null;
  }

  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {nearbyOffers.map((offer) => <Offer key={offer.id} offer={offer} className={`near-places__card`}/>)}
      </div>
    </section>
  );
};

NearOffersList.propTypes = {
  nearbyOffers: offersType,
  isNearbyOffersLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  nearbyOffers: state.nearbyOffers,
  isNearbyOffersLoaded: state.isNearbyOffersLoaded,
});

export {NearOffersList};
export default connect(mapStateToProps, null)(NearOffersList);
