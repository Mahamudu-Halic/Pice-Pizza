import React, { useContext, useState } from "react";
import {
  AdminContext,
  AdminContextProvider,
} from "../../services/admin/admin.context";
import AdminNavbar from "../components/admin-navbar";
import { DashboardContextProvider } from "../services/dashboard/dashboard.context";
import AdminSidebar from "../components/admin-sidebar";
import { AddAdminForm } from "../components/admin/add-admin-form";
import { Empty } from "../../components/empty";
import { Loader } from "../../components/loader";

const Admins = () => {
  const [addAdmin, setAddAdmin] = useState(false);

  const toggleAdmin = () => {
    setAddAdmin((prev) => !prev);
  };

  const { admins, isLoading } = useContext(AdminContext);
  return (
    <AdminContextProvider>
      <DashboardContextProvider>
        <div className="admin">
          <AdminSidebar />
          <div className="adminContent">
            <AdminNavbar title={"Admins"} />
            <div className="adminPage">
              <div className="add-admin-btn">
                <button onClick={toggleAdmin}>add admin</button>
              </div>

              {addAdmin && <AddAdminForm toggleAdmin={toggleAdmin} />}

              {isLoading ? (
                <Loader />
              ) : (
                <div>
                  {admins.length > 0 ? (
                    <p>admins here</p>
                  ) : (
                    <Empty caption="no admins found" />
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </DashboardContextProvider>
    </AdminContextProvider>
  );
};

export default Admins;
