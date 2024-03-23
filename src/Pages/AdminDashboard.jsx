import React from "react";
import HeaderComponent from "../Components/HeaderComponent";
import MenuItem from "../Components/MenuItem";
import SideMenuComponent from "../Components/SideMenuComponent";
import UserTableComponent from "../Components/UserTableComponent";

function AdminDashboard() {
  return (
    <div>
      <HeaderComponent>
      <MenuItem linktext="For Travellers" linkurl="/" />
        <MenuItem linktext="For Business" linkurl="/" />
        <MenuItem linktext="Logout" linkurl="/" />
      </HeaderComponent>
      <SideMenuComponent>
        <MenuItem linktext="Users" linkurl="/" />
        <MenuItem linktext="Hotels" linkurl="/" />
        <MenuItem linktext="Tour Guides" linkurl="/" />
        <MenuItem linktext="Travel Destinations" linkurl="/" />
        <MenuItem linktext="Logout" linkurl="/" />
      </SideMenuComponent>
      <UserTableComponent />
    </div>
  );
}

export default AdminDashboard;
