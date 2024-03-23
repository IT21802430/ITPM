import React from "react";
import './SideMenuComponent.css';

function SideMenuComponent(props) {
  return <div className="sidebar">{props.children}</div>;
}

export default SideMenuComponent;
