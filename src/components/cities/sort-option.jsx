import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

const SortOption = ({sortType, currentSortType, onSortChange}) => {
  const handleSortOptionChange = () => {
    onSortChange(sortType);
  };

  return (
    <li
      className={`places__option ${currentSortType === sortType ? `places__option--active` : ``}`} tabIndex="0"
      onClick={handleSortOptionChange}
    >
      {sortType}
    </li>
  );
};

SortOption.propTypes = {
  sortType: PropTypes.string.isRequired,
  currentSortType: PropTypes.string.isRequired,
  onSortChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentSortType: state.currentSortType
});

const mapDispatchToProps = (dispatch) => ({
  onSortChange(sortType) {
    dispatch(ActionCreator.changeSortType(sortType));
  },
});

export {
  SortOption
};

export default connect(mapStateToProps, mapDispatchToProps)(SortOption);
