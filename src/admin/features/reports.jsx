import AdminSidebar from "../components/admin-sidebar";
import AdminNavbar from "../components/admin-navbar";
import Layout from "../components/layout";
import { useContext } from "react";
import { AdminContext } from "../../services/admin/admin.context";
import Unauthorized from "../components/unauthorized";
import { Empty } from "../../components/empty";

const Reports = () => {
  const { isAdmin } = useContext(AdminContext);

  return (
    <Layout>
      {isAdmin ? (
        <div className="admin">
          <AdminSidebar />
          <div className="adminContent">
            <AdminNavbar title={"Reports"} />
            <div className="reports adminPage">
              <Empty caption={"no reports"}/>
            </div>
          </div>
        </div>
      ) : (
        <Unauthorized />
      )}
    </Layout>
  );
};

export default Reports;
