import React from "react";
import "./SearchInput.scss";

function SearchInput(props) {
  return (
    <div className="SearchInput">
      <div>o</div>
      <div className="inputContainer">
        <input
          placeholder="Search for a country..."
          value={props.searchInputValue}
          onChange={(e) => props.handleInputChange(e)}
        />
      </div>
    </div>
  );
}
export default SearchInput;
