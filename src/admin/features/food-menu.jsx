import React from "react";
import AdminNavbar from "../components/admin-navbar";
import AdminSidebar from "../components/admin-sidebar";

const FoodMenu = () => {
  return (
    <div className="admin">
      <AdminSidebar />
      <div className="adminContent">
        <AdminNavbar title={"Food Menu"} />
        <div className="foodMenu adminPage"></div>
      </div>
    </div>
  );
};

export default FoodMenu;
