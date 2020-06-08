import React from "react";
import "./Elements.scss";
import Element from "./Element/Element";

function Elements(props) {
  return (
    <div className="Elements">
      {props.data.map((item) => (
        <Element elementData={item} key={item.name} />
      ))}
    </div>
  );
}

export default Elements;
