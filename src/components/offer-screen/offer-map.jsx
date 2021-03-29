import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {offers as offersType} from '../../types';
import Map from '../map/map';
import LoadingScreen from '../loading-screen/loading-screen';
import {fetchNearbyOffers} from '../../store/api-actions';

const OfferMap = ({offerID, nearbyOffers, isNearbyOffersLoaded, onLoadNearbyOffers}) => {
  useEffect(() => {
    onLoadNearbyOffers(offerID);
  }, [offerID]);

  if (!isNearbyOffersLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <section className="property__map map">
      <Map offers={nearbyOffers} />
    </section>
  );
};

OfferMap.propTypes = {
  offerID: PropTypes.number.isRequired,
  isNearbyOffersLoaded: PropTypes.bool.isRequired,
  onLoadNearbyOffers: PropTypes.func.isRequired,
  nearbyOffers: offersType,
};

const mapStateToProps = (state) => ({
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
