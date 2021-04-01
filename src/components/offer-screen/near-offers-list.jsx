import React from 'react';
import {useSelector} from "react-redux";
import Offer from '../offers/offer.jsx';

const NearOffersList = () => {
  const {nearbyOffers, isNearbyOffersLoaded} = useSelector((state) => state.SERVER);


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

export default NearOffersList;
