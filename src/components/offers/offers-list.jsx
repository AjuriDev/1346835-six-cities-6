import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Offer from './offer';

const OffersList = ({offers}) => {
  const {activeOffer, setActiveOffer} = useState(null);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <Offer key={offer.id} offer={offer} />)}
    </div>
  );
};

OffersList.propTypes = {
  offers: PropTypes.array.isRequired
};

export default OffersList;
