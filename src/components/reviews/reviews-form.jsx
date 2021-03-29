import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {reviews as reviewsType} from '../../types';
import {sendReview} from '../../store/api-actions';

const rating = [
  {
    star: 5,
    value: `perfect`
  },
  {
    star: 4,
    value: `good`
  },
  {
    star: 3,
    value: `not bad`
  },
  {
    star: 2,
    value: `badly`
  },
  {
    star: 1,
    value: `terrible`
  },
];

const initialReview = {
  rating: 0,
  comment: ``,
};

const COMMENT_MIN_LENGTH = 50;

const ReviewsForm = ({offerID, currentReviews, onSubmit}) => {
  const [review, setReview] = useState({comment: ``, rating: null});

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onSubmit(offerID, review);
  };

  useEffect(() => {
    setReview(initialReview);
  }, [currentReviews]);

  const isValidity = review.comment.length >= COMMENT_MIN_LENGTH && review.rating !== null;

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {
          rating.map((item) => {
            return (
              <React.Fragment
                key={`rating-${item.star}`}
              >
                <input
                  className="form__rating-input visually-hidden"
                  name="rating"
                  defaultValue={item.star}
                  id={`${item.star}-stars`}
                  type="radio"
                  onChange={({target}) => {
                    setReview((prevReview) => {
                      return {...prevReview, rating: target.value};
                    });
                  }}
                />
                <label
                  htmlFor={`${item.star}-stars`}
                  className="reviews__rating-label form__rating-label"
                  title={item.value}
                >
                  <svg className="form__star-image" width={37} height={33}>
                    <use xlinkHref="#icon-star" />
                  </svg>
                </label>
              </React.Fragment>
            );
          })
        }
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        defaultValue={review.comment}
        onChange={({target}) => {
          setReview((prevReview) => {
            return {...prevReview, comment: target.value};
          });
        }}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!isValidity}>Submit</button>
      </div>
    </form>
  );
};

ReviewsForm.propTypes = {
  offerID: PropTypes.number.isRequired,
  currentReviews: reviewsType,
  onSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentReviews: state.currentReviews,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(id, review) {
    dispatch(sendReview(id, review));
  },
});

export {ReviewsForm};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewsForm);
