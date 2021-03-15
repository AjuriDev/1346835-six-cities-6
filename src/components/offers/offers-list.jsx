import React/* , {useState}*/ from 'react';
import Offer from './offer';
import {offers as offersType} from '../../types';

const OffersList = ({offers}) => {
  // const [activeOffer, setActiveOffer] = useState(null);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <Offer key={offer.id} offer={offer} block={`cities`} />)}
    </div>
  );
};

OffersList.propTypes = {
  offers: offersType,
};

export default OffersList;
