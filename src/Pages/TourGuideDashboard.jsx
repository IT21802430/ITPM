import React from "react";
import HeaderComponent from "../Components/HeaderComponent";
import MenuItem from "../Components/MenuItem";
import SideMenuComponent from "../Components/SideMenuComponent";

function TourGuideDashboard() {
  return (
    <div>
      <HeaderComponent>
        <MenuItem linktext="For Travellers" linkurl="/" />
        <MenuItem linktext="Logout" linkurl="/" />
      </HeaderComponent>
      <SideMenuComponent>
        <MenuItem linktext="My Profile" linkurl="/" />
        <MenuItem linktext="Logout" linkurl="/" />
      </SideMenuComponent>
    </div>
  );
}

export default TourGuideDashboard;
