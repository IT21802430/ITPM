import React from "react";
import HeaderComponent from "../Components/HeaderComponent";
import LoginComponent from "../Components/LoginComponent";
import MenuItem from "../Components/MenuItem";

function LoginPage() {
  return (
    <div>
      <HeaderComponent>
        <MenuItem linktext="About Us" linkurl="/" />
        <MenuItem linktext="For Business" linkurl="/" />
        <MenuItem linktext="Register" linkurl="/" />
      </HeaderComponent>
      <LoginComponent />
    </div>
  );
}

export default LoginPage;
