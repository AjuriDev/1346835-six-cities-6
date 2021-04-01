import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {SortType} from "../../const";
import SortOption from './sort-option';

const PlacesSort = () => {
  const {currentSortType} = useSelector((state) => state.MAIN);
  const [isOptionsListOpened, setOptionsListOpened] = useState(false);

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

export default PlacesSort;
