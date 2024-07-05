import React from "react";
import AdminNavbar from "../components/admin-navbar";
import AdminSidebar from "../components/admin-sidebar";
import { DashboardContextProvider } from "../services/dashboard/dashboard.context";

const FoodMenu = () => {
  return (
    <DashboardContextProvider>
      <div className="admin">
        <AdminSidebar />
        <div className="adminContent">
          <AdminNavbar title={"Food Menu"} />
          <div className="foodMenu adminPage"></div>
        </div>
      </div>
    </DashboardContextProvider>
  );
};

export default FoodMenu;
