import React from "react";

function Filter(props) {
  return (
    <div>
      <select
        onChange={(e) => props.changeSelectedFilter(e)}
        value={props.selectedFilter}
      >
        {props.filters
          ? props.filters.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))
          : ""}
        {console.log(`filters    ${props.filters}`)}
      </select>
    </div>
  );
}

export default Filter;
