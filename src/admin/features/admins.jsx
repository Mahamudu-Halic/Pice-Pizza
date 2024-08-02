import React from "react";
import { AdminContextProvider } from "../../services/admin/admin.context";
import AdminNavbar from "../components/admin-navbar";
import { DashboardContextProvider } from "../services/dashboard/dashboard.context";
import AdminSidebar from "../components/admin-sidebar";

const Admins = () => {
  return (
    <AdminContextProvider>
      <DashboardContextProvider>
        <div className="admin">
          <AdminSidebar />
          <div className="adminContent">
            <AdminNavbar title={"Admins"} />
            <div className="adminPage">
              <p>display all admins here</p>
              <button>add admin</button>

              <div className="admin-form">
                <div className="admin-form-group">
                    <label>Admin Name:</label>
                    <input type="text" name="adminName" />
                </div>
                <div className="admin-form-group">
                    <label>Admin Password:</label>
                    <input type="password" name="adminPassword" />
                </div>

                <button>save</button>
              </div>
            </div>
          </div>
        </div>
      </DashboardContextProvider>
    </AdminContextProvider>
  );
};

export default Admins;
