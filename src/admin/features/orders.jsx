import AdminSidebar from "../components/admin-sidebar";
import AdminNavbar from "../components/admin-navbar";
import OrdersComponent from "../components/dashboard/orders-component";
import Layout from "../components/layout";
import { useContext } from "react";
import { AdminContext } from "../../services/admin/admin.context";
import Unauthorized from "../components/unauthorized";

const Orders = () => {
  const { isAdmin } = useContext(AdminContext);

  return (
    <Layout>
      {isAdmin ? (
        <div className="admin">
          <AdminSidebar />
          <div className="adminContent">
            <AdminNavbar title={"Orders"} />
            <div className="orders adminPage">
              <OrdersComponent />
            </div>
          </div>
        </div>
      ) : (
        <Unauthorized />
      )}
    </Layout>
  );
};

export default Orders;
