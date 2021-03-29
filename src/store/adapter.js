const adaptUserToClient = (user) => {
  const adaptedUser = {
    ...user,
    avatarUrl: user.avatar_url,
    isPro: user.is_pro
  };

  delete adaptedUser.avatar_url;
  delete adaptedUser.is_pro;

  return adaptedUser;
};

const adaptOfferToClient = (offer) => {
  const adaptedOffer = {
    ...offer,
    host: adaptUserToClient(offer.host),
    isFavorite: offer.is_favorite,
    isPremium: offer.is_premium,
    maxAdults: offer.max_adults,
    previewImage: offer.preview_image,
  };

  delete adaptedOffer.is_favorite;
  delete adaptedOffer.is_premium;
  delete adaptedOffer.max_adults;
  delete adaptedOffer.preview_image;

  return adaptedOffer;
};

const adaptReviewToClient = (review) => {
  const adaptedReview = {
    ...review,
    user: adaptUserToClient(review.user),
  };

  return adaptedReview;
};

export {adaptOfferToClient, adaptUserToClient, adaptReviewToClient};
