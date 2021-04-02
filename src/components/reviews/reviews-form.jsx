import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import PropTypes from 'prop-types';
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
  rating: null,
  comment: ``,
};

const CommentLength = {
  MIN: 50,
  MAX: 300,
};

const fieldsetStyle = {
  margin: 0,
  padding: 0,
  border: `none`,
};

const ReviewsForm = ({offerID}) => {
  const {currentReviews} = useSelector((state) => state.SERVER);
  const {isReviewSending} = useSelector((state) => state.FORM);

  const dispatch = useDispatch();

  const [review, setReview] = useState({comment: ``, rating: null});

  const handleSubmit = (evt) => {
    evt.preventDefault();

    dispatch(sendReview(offerID, review));
  };

  useEffect(() => {
    setReview(initialReview);
  }, [currentReviews]);

  const isValidity =
    review.comment.length >= CommentLength.MIN &&
    review.comment.length <= CommentLength.MAX &&
    review.rating !== null;

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleSubmit}
    >
      <fieldset style={fieldsetStyle} disabled={isReviewSending}>
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
                    value={item.star}
                    id={`${item.star}-stars`}
                    type="radio"
                    checked={+review.rating === item.star}
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
          value={review.comment}
          onChange={({target}) => {
            setReview((prevReview) => {
              return {...prevReview, comment: target.value};
            });
          }}
        />
      </fieldset>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!isValidity || isReviewSending}>Submit</button>
      </div>
    </form>
  );
};

ReviewsForm.propTypes = {
  offerID: PropTypes.number.isRequired,
};

export default ReviewsForm;
