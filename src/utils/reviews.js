import dayjs from 'dayjs';

const sortByDateUp = ({date: dateA}, {date: dateB}) => dayjs(dateB).diff(dayjs(dateA));

const sortReviews = (reviews) => {
  return reviews.slice().sort(sortByDateUp);
};

export {sortReviews};
