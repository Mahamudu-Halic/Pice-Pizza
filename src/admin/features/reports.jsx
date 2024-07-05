import React from "react";
import AdminSidebar from "../components/admin-sidebar";
import AdminNavbar from "../components/admin-navbar";
import { DashboardContextProvider } from "../services/dashboard/dashboard.context";

const Reports = () => {
  return (
    <DashboardContextProvider>
      <div className="admin">
        <AdminSidebar />
        <div className="adminContent">
          <AdminNavbar title={"Reports"} />
          <div className="reports adminPage"></div>
        </div>
      </div>
    </DashboardContextProvider>
  );
};

export default Reports;
