import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import Review from './review';
import ReviewsForm from './reviews-form';
import PropTypes from 'prop-types';
import LoadingScreen from '../loading-screen/loading-screen';
import {fetchReviews} from '../../store/api-actions';
import {AuthorizationStatus} from '../../const';

const MAX_REVIEWS = 10;

const ReviewsBlock = ({offerID}) => {
  const {authorizationStatus} = useSelector((state) => state.USER);
  const {currentReviews, isReviewsLoaded} = useSelector((state) => state.SERVER);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReviews(offerID));
  }, [offerID]);

  if (!isReviewsLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{ currentReviews.length }</span></h2>
      <ul className="reviews__list">
        {
          currentReviews.slice(0, MAX_REVIEWS).map((review) => <Review key={review.id} review={review} />)
        }
      </ul>
      {authorizationStatus === AuthorizationStatus.AUTH && <ReviewsForm offerID={offerID} />}
    </section>
  );
};

ReviewsBlock.propTypes = {
  offerID: PropTypes.number.isRequired,
};

export default ReviewsBlock;
