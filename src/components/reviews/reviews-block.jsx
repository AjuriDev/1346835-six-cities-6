import React from 'react';
import Review from './review';
import ReviewsForm from './reviews-form';
import {reviews as reviewsType} from '../../types';

const ReviewsBlock = ({reviews}) => {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{ reviews.length }</span></h2>
      <ul className="reviews__list">
        {
          reviews.map((review) => <Review key={review.id} review={review} />)
        }
      </ul>
      <ReviewsForm />
    </section>
  );
};

ReviewsBlock.propTypes = {
  reviews: reviewsType,
};

export default ReviewsBlock;
