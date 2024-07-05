import React from "react";
import AdminSidebar from "../components/admin-sidebar";
import AdminNavbar from "../components/admin-navbar";

import "../styles/admin.css";
import "../styles/dashboard.css";
import StatCardComponent from "../components/dashboard/stat-card";
import { BiMailSend } from "react-icons/bi";
import StatCardList from "../components/dashboard/stat-card-list";
import OrdersComponent from "../components/dashboard/orders-component";
import { DashboardContextProvider } from "../services/dashboard/dashboard.context";
import { ToastContainer } from "react-toast";

const AdminDashboard = () => {
  return (
    <DashboardContextProvider>
      <ToastContainer delay={3000} position="top-center" />
      <div className="admin">
        <AdminSidebar />
        <div className="adminContent">
          <AdminNavbar title={"Dashboard"} />
          <div className="adminDashboard adminPage">
            <StatCardList />
            <OrdersComponent />
          </div>
        </div>
      </div>
    </DashboardContextProvider>
  );
};

export default AdminDashboard;
