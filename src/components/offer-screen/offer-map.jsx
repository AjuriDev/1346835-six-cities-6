import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {getNearbyWithCurrentOffers} from "../../store/selectors";
import Map from '../map/map';
import LoadingScreen from '../loading-screen/loading-screen';
import {fetchNearbyOffers} from '../../store/api-actions';

const OfferMap = () => {
  const {
    currentOffer,
    isNearbyOffersLoaded
  } = useSelector((state) => state.SERVER);
  const {nearbyWithCurrentOffers} = useSelector((state) => ({...getNearbyWithCurrentOffers(state)}));


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNearbyOffers(currentOffer.id));
  }, [currentOffer.id]);

  if (!isNearbyOffersLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <section className="property__map map">
      <Map offers={nearbyWithCurrentOffers} currentOfferID={currentOffer.id} />
    </section>
  );
};

export default OfferMap;
