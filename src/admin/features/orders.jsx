import React from "react";
import AdminSidebar from "../components/admin-sidebar";
import AdminNavbar from "../components/admin-navbar";
import { DashboardContextProvider } from "../services/dashboard/dashboard.context";

const Orders = () => {
  return (
    <DashboardContextProvider>
      <div className="admin">
        <AdminSidebar />
        <div className="adminContent">
          <AdminNavbar title={"Orders"} />
          <div className="orders adminPage"></div>
        </div>
      </div>
    </DashboardContextProvider>
  );
};

export default Orders;
