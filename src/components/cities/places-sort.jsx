import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {SortType} from "../../const";
import SortOption from './sort-option';

const PlacesSort = ({
  currentSortType
}) => {
  const [
    isOptionsListOpened,
    setOptionsListOpened
  ] = useState(false);

  const handleOptionsListClick = () => {
    setOptionsListOpened(!isOptionsListOpened);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex="0" onClick={handleOptionsListClick}>
        {currentSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={`places__options places__options--custom ${isOptionsListOpened ? `places__options--opened` : ``}`}
        onClick={handleOptionsListClick}
      >
        {Object.values(SortType).map((sortType, i) => <SortOption key={i} sortType={sortType} />)}
      </ul>
    </form>
  );
};

PlacesSort.propTypes = {
  currentSortType: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  currentSortType: state.currentSortType
});

export {PlacesSort};
export default connect(mapStateToProps, null)(PlacesSort);
