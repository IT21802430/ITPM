import React from "react";
import './HeaderComponent.css';

function HeaderComponent(props) {
  return <div className="header">{props.children}</div>;
}

export default HeaderComponent;
