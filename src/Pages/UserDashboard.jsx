import React from "react";
import HeaderComponent from "../Components/HeaderComponent";
import MenuItem from "../Components/MenuItem";
import SideMenuComponent from "../Components/SideMenuComponent";
import ProfileComponent from "../Components/ProfileComponent";

function UserDashboard() {
  return (
    <div>
      <HeaderComponent>
        <MenuItem linktext="For Business" linkurl="/" />
        <MenuItem linktext="Logout" linkurl="/" />
      </HeaderComponent>
      <SideMenuComponent>
        <MenuItem linktext="My Profile" linkurl="/" />
        <MenuItem linktext="New Tour" linkurl="/" />
        <MenuItem linktext="Previous Tours" linkurl="/" />
        <MenuItem linktext="Logout" linkurl="/" />
      </SideMenuComponent>
      <ProfileComponent />
    </div>
  );
}

export default UserDashboard;
