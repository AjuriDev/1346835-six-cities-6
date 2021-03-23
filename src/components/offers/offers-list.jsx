import React/* , {useState}*/ from 'react';
import {connect} from 'react-redux';
import Offer from './offer';
import {offers as offersType} from '../../types';

const OffersList = ({currentOffers}) => {
  // const [activeOffer, setActiveOffer] = useState(null);

  return (
    <div className="cities__places-list places__list tabs__content">
      {currentOffers.map((offer) => <Offer key={offer.id} offer={offer} block={`cities`} />)}
    </div>
  );
};

OffersList.propTypes = {
  currentOffers: offersType,
};

const mapStateToProps = (state) => ({
  currentOffers: state.currentOffers
});

export {OffersList};
export default connect(mapStateToProps, null)(OffersList);
