import { useContext, useState } from "react";
import { AdminContext } from "../../services/admin/admin.context";
import AdminNavbar from "../components/admin-navbar";
import AdminSidebar from "../components/admin-sidebar";
import { AddAdminForm } from "../components/admin/add-admin-form";
import { Empty } from "../../components/empty";
import { Loader } from "../../components/loader";
import AdminList from "../components/admin/admin-list";
import Layout from "../components/layout";
import Unauthorized from "../components/unauthorized";

const Admins = () => {
  const [addAdmin, setAddAdmin] = useState(false);

  const toggleAdmin = () => {
    setAddAdmin((prev) => !prev);
  };

  const { admins, isLoading, registerAdmin, isAdmin } =
    useContext(AdminContext);

  return (
    <Layout>
      {isAdmin ? (
        <>
          <div className="admin">
            <AdminSidebar />
            <div className="adminContent">
              <AdminNavbar title={"Admins"} />
              <div className="adminPage">
                <div className="add-admin-btn">
                  <button onClick={toggleAdmin}>add admin</button>
                </div>

                {addAdmin && (
                  <AddAdminForm
                    toggleAdmin={toggleAdmin}
                    registerAdmin={registerAdmin}
                    isLoading={isLoading}
                  />
                )}

                {isLoading ? (
                  <Loader />
                ) : (
                  <div>
                    {admins.length > 0 ? (
                      <AdminList admins={admins} />
                    ) : (
                      <Empty caption="no admins found" />
                    )}
                  </div>
                )}
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

export default Admins;
