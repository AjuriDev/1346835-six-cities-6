import React from 'react';
import Offer from '../offers/offer.jsx';
import {offers as offersType} from '../../types';

const NearOffersList = ({offers}) => {

  return (
    <div className="near-places__list places__list">
      {offers.map((offer) => <Offer key={offer.id} offer={offer} block={`near-places`}/>)}
    </div>
  );
};

NearOffersList.propTypes = {
  offers: offersType,
};

export default NearOffersList;
