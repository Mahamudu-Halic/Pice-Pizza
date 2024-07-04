import React from "react";
import AdminSidebar from "../components/admin-sidebar";
import AdminNavbar from "../components/admin-navbar";

const Reports = () => {
  return (
    <div className="admin">
      <AdminSidebar />
      <div className="adminContent">
        <AdminNavbar title={"Reports"} />
        <div className="reports adminPage"></div>
      </div>
    </div>
  );
};

export default Reports;
