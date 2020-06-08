import React from "react";
import "./HomePage.scss";
import Elements from "./Elements/Elements";
import FilteredFields from "./FiltersFields/FiltersFields";

function HomePage(props) {
  return (
    <div className="HomePage">
      <FilteredFields
        filters={props.filters}
        searchInputValue={props.searchInputValue}
        selectedFilter={props.selectedFilter}
        changeSelectedFilter={props.changeSelectedFilter}
        handleInputChange={props.handleInputChange}
      />
      <Elements data={props.data} />
    </div>
  );
}

export default HomePage;
