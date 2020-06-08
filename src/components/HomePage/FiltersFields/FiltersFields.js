import React from "react";
import "./FiltersFields.scss";
import SearchInput from "./SearchInput/SearchInput";
import Filter from "./Filter/Filter";

function FiltersFields(props) {
  return (
    <div className="FiltersFields">
      <SearchInput
        handleInputChange={props.handleInputChange}
        searchInputValue={props.searchInputValue}
      />
      <Filter
        filters={props.filters}
        selectedFilter={props.selectedFilter}
        changeSelectedFilter={props.changeSelectedFilter}
      />
    </div>
  );
}

export default FiltersFields;
