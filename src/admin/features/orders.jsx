import React from "react";
import AdminSidebar from "../components/admin-sidebar";
import AdminNavbar from "../components/admin-navbar";
import { DashboardContextProvider } from "../services/dashboard/dashboard.context";
import OrdersComponent from "../components/dashboard/orders-component";

const Orders = () => {
  return (
    <DashboardContextProvider>
      <div className="admin">
        <AdminSidebar />
        <div className="adminContent">
          <AdminNavbar title={"Orders"} />
          <div className="orders adminPage">
            <OrdersComponent />
          </div>
        </div>
      </div>
    </DashboardContextProvider>
  );
};

export default Orders;
