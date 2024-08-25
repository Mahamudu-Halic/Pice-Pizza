import AdminSidebar from "../components/admin-sidebar";
import AdminNavbar from "../components/admin-navbar";

import "../styles/admin.css";
import "../styles/dashboard.css";
import StatCardList from "../components/dashboard/stat-card-list";
import OrdersComponent from "../components/dashboard/orders-component";
import { ToastContainer } from "react-toast";
import Layout from "../components/layout";
import { useContext } from "react";
import { AdminContext } from "../../services/admin/admin.context";
import Unauthorized from "../components/unauthorized";

const AdminDashboard = () => {
  const { isAdmin } = useContext(AdminContext);
  return (
    <Layout>
      {isAdmin ? (
        <>
          {/* <ToastContainer delay={3000} position="top-center" /> */}
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
        </>
      ) : (
        <Unauthorized />
      )}
    </Layout>
  );
};

export default AdminDashboard;
