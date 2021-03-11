import React from 'react';
import {calcRatingProgress} from '../../utils/offers.js';
import dayjs from 'dayjs';
import {review as reviewType} from '../../types';

const Review = ({review}) => {
  const {
    comment,
    date,
    rating,
    user,
  } = review;

  const humanizedDate = dayjs(date);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width={54} height={54} alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          { user.name }
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: calcRatingProgress(rating)}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          { comment }
        </p>
        <time className="reviews__time" dateTime={humanizedDate.format(`YYYY-MM-DD`)}>{ humanizedDate.format(`MMMM YYYY`) }</time>
      </div>
    </li>
  );
};

Review.propTypes = {
  review: reviewType,
};

export default Review;
