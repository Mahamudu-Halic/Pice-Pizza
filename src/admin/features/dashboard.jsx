import AdminSidebar from "../components/admin-sidebar";
import AdminNavbar from "../components/admin-navbar";

import "../styles/admin.css";
import "../styles/dashboard.css";
import StatCardList from "../components/dashboard/stat-card-list";
import OrdersComponent from "../components/dashboard/orders-component";
import { DashboardContextProvider } from "../services/dashboard/dashboard.context";
import {AdminContextProvider } from "../../services/admin/admin.context";

const AdminDashboard = () => {
  return (
    <AdminContextProvider>

    <DashboardContextProvider>
      {/* <ToastContainer delay={3000} position="top-center" /> */}
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
    </AdminContextProvider>
  );
};

export default AdminDashboard;
