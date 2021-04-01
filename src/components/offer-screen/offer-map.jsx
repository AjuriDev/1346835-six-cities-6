import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import Map from '../map/map';
import LoadingScreen from '../loading-screen/loading-screen';
import {fetchNearbyOffers} from '../../store/api-actions';

const OfferMap = () => {
  const {
    currentOffer,
    nearbyOffers,
    isNearbyOffersLoaded
  } = useSelector((state) => state.SERVER);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNearbyOffers(currentOffer.id));
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

export default OfferMap;
