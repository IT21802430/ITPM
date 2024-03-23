import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css"; 
import UserDashboard from "./Pages/UserDashboard.jsx";
import LoginPage from "./Pages/LoginPage.jsx";
import HotelDashboard from "./Pages/HotelDashboard.jsx";
import TourGuideDashboard from "./Pages/TourGuideDashboard.jsx";
import AdminDashboard from "./Pages/AdminDashboard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  }, 
  {
    path: "/user",
    element: <UserDashboard />,
  }, 
  {
    path: "/hotel",
    element: <HotelDashboard />,
  }, 
  {
    path: "/tourguide",
    element: <TourGuideDashboard />,
  }, 
  {
    path: "/admin",
    element: <AdminDashboard />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
