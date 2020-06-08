import React from "react";
import Flag from "react-world-flags";
import "./Element.scss";

function Element(props) {
  return (
    <div className="Element">
      <div className="flag">
        <Flag code={props.elementData.flag} />
      </div>
      <div className="countryDetails">
        <div className="countryName">{props.elementData.name}</div>
        <p>
          <span>Population: </span>
          {props.elementData.population}
        </p>

        <p>
          <span>Region: </span>
          {props.elementData.region}
        </p>

        <p>
          <span>Capital: </span>
          {props.elementData.capital}
        </p>
      </div>
    </div>
  );
}

export default Element;
