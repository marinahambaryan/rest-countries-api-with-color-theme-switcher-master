import React from "react";
import "./Navigation.scss";

function Navigation(props) {
  return (
    <div className="Navigation">
      <div className="NavigationItems">
        <p className="Navigation-left">Where in the world?</p>
        <div className="mode-container" onClick={props.onModeClick}>
          <div></div>
          <p className="mode-text">Dark Mode</p>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
