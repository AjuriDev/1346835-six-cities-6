import React, {useEffect} from 'react';
import Review from './review';
import {connect} from 'react-redux';
import ReviewsForm from './reviews-form';
import {reviews as reviewsType} from '../../types';
import PropTypes from 'prop-types';
import LoadingScreen from '../loading-screen/loading-screen';
import {fetchReviews} from '../../store/api-actions';
import {AuthorizationStatus} from '../../const';

const MAX_REVIEWS = 10;

const ReviewsBlock = ({authorizationStatus, offerID, currentReviews, isReviewsLoaded, onLoadCurrentReviews}) => {
  useEffect(() => {
    onLoadCurrentReviews(offerID);
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
  authorizationStatus: PropTypes.string.isRequired,
  offerID: PropTypes.number.isRequired,
  isReviewsLoaded: PropTypes.bool.isRequired,
  onLoadCurrentReviews: PropTypes.func.isRequired,
  currentReviews: reviewsType,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  currentReviews: state.currentReviews,
  isReviewsLoaded: state.isReviewsLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadCurrentReviews(id) {
    dispatch(fetchReviews(id));
  },
});

export {ReviewsBlock};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewsBlock);
