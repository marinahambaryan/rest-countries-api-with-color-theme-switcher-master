import React, { useState } from "react";
import "./Filter.scss";

function Filter(props) {
  const [isSelectorOpen, setIsSelectorOpen] = useState(false);
  const handleDropdownChange = () => {
    setIsSelectorOpen(!isSelectorOpen);
  };
  const handleFilterClick = (e, item) => {
    props.changeSelectedFilter(e, item);
    handleDropdownChange();
  };
  return (
    <div className="Filter">
      <div className="select">
        <div className="selectedFilter">
          <p>{props.selectedFilter}</p>
          <div onClick={handleDropdownChange}>></div>
        </div>
        {isSelectorOpen ? (
          <div className="options">
            {props.filters
              ? props.filters.map((item) => (
                  <p
                    value={item}
                    key={item}
                    onClick={(e) => handleFilterClick(e, item)}
                  >
                    {item}
                  </p>
                ))
              : ""}
          </div>
        ) : (
          ""
        )}
      </div>
      <div></div>
    </div>
  );
}

export default Filter;
