import React from "react";
import "./Elements.scss";
import Element from "./Element/Element";
import CountryDetails from "../../CountryDetails/CountryDetails";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";

function Elements(props) {
  return (
    <div className="Elements">
      {props.data.map((item) => (
        <div key={item.name}>
          <Link to={`/${item.name}`}>
            <Element elementData={item} />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Elements;
