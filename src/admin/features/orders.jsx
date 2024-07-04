import React from "react";
import AdminSidebar from "../components/admin-sidebar";
import AdminNavbar from "../components/admin-navbar";

const Orders = () => {
  return (
    <div className="admin">
      <AdminSidebar />
      <div className="adminContent">
        <AdminNavbar title={"Orders"} />
        <div className="orders adminPage"></div>
      </div>
    </div>
  );
};

export default Orders;
