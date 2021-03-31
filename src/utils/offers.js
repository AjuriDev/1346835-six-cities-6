import {SortType} from '../const';

const MAX_STARS = 5;

const calcRatingProgress = (rating) => {
  return `${rating / MAX_STARS * 100}%`;
};

const filterOffersByCity = (offers, city) => {
  return offers.filter((offer) => offer.city.name === city);
};

const filterOffersByFavorites = (offers) => {
  return offers.filter((offer) => offer.isFavorite);
};

const sortOffersByOption = (offers, option) => {
  const sortedOffers = [...offers];
  sortedOffers.sort((a, b) => {
    switch (option) {
      case (SortType.POPULAR):
        return a.id - b.id;
      case (SortType.PRICE_LOW_TO_HIGH):
        return a.price - b.price;
      case (SortType.PRICE_HIGH_TO_LOW):
        return b.price - a.price;
      case (SortType.TOP_RATED_FIRST):
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  return sortedOffers;
};

const updateFavoriteOffer = (offers, updatedOffer) => {
  const index = offers.findIndex((offer) => offer.id === updatedOffer.id);

  if (index < 0) {
    return offers;
  }

  return [
    ...offers.slice(0, index),
    updatedOffer,
    ...offers.slice(index + 1)
  ];
};

export {
  calcRatingProgress,
  filterOffersByCity,
  filterOffersByFavorites,
  sortOffersByOption,
  updateFavoriteOffer,
};
