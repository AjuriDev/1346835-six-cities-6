import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {offers as offersType} from '../../types';
import Map from '../map/map';
import LoadingScreen from '../loading-screen/loading-screen';
import {offer as offerType} from '../../types';
import {fetchNearbyOffers} from '../../store/api-actions';

const OfferMap = ({currentOffer, nearbyOffers, isNearbyOffersLoaded, onLoadNearbyOffers}) => {
  useEffect(() => {
    onLoadNearbyOffers(currentOffer.id);
  }, [currentOffer.id]);

  if (!isNearbyOffersLoaded) {
    return (
      <LoadingScreen />
    );
  }

  const nearbyWithCurrentOffers = nearbyOffers.slice();
  nearbyWithCurrentOffers.push(currentOffer);

  return (
    <section className="property__map map">
      <Map offers={nearbyWithCurrentOffers} currentOfferID={currentOffer.id} />
    </section>
  );
};

OfferMap.propTypes = {
  currentOffer: offerType,
  isNearbyOffersLoaded: PropTypes.bool.isRequired,
  onLoadNearbyOffers: PropTypes.func.isRequired,
  nearbyOffers: offersType,
};

const mapStateToProps = (state) => ({
  currentOffer: state.currentOffer,
  nearbyOffers: state.nearbyOffers,
  isNearbyOffersLoaded: state.isNearbyOffersLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadNearbyOffers(id) {
    dispatch(fetchNearbyOffers(id));
  },
});

export {OfferMap};
export default connect(mapStateToProps, mapDispatchToProps)(OfferMap);
