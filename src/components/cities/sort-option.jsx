import React from "react";
import {useSelector, useDispatch} from "react-redux";
import PropTypes from "prop-types";
import {changeSortType} from "../../store/actions/main";

const SortOption = ({sortType}) => {
  const {currentSortType} = useSelector((state) => state.MAIN);

  const dispatch = useDispatch();

  const handleSortOptionChange = () => {
    dispatch(changeSortType(sortType));
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
};

export default SortOption;
