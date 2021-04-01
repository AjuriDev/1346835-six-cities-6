import React/* , {useState}*/ from 'react';
import {useSelector} from "react-redux";
import {getCurrentOffers} from "../../store/selectors";
import Offer from './offer';

const OffersList = () => {
  const {currentOffers} = useSelector((state) => ({...getCurrentOffers(state)}));

  return (
    <div className="cities__places-list places__list tabs__content">
      {currentOffers.map((offer) => <Offer key={offer.id} offer={offer} className={`cities__place-card`} />)}
    </div>
  );
};

export default OffersList;
