const MAX_STARS = 5;

const calcRatingProgress = (rating) => {
  return `${rating / MAX_STARS * 100}%`;
};

export {
  calcRatingProgress,
};
