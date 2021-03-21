const MAX_STARS = 5;

const calcRatingProgress = (rating) => {
  return `${rating / MAX_STARS * 100}%`;
};

const filterOffersByCity = (offers, city) => {
  return offers.filter((offer) => offer.city.name === city);
};

export {
  calcRatingProgress,
  filterOffersByCity,
};
