import React from "react";
import AdminSidebar from "../components/admin-sidebar";
import AdminNavbar from "../components/admin-navbar";

import "../styles/admin.css";
import "../styles/dashboard.css";
import StatCardComponent from "../components/dashboard/stat-card";
import { BiMailSend } from "react-icons/bi";

const AdminDashboard = () => {
  return (
    <div className="admin">
      <AdminSidebar />
      <div className="adminContent">
        <AdminNavbar title={"Dashboard"} />
        <div className="adminDashboard adminPage">
          <div className="statCardList">
            <StatCardComponent
              Icon={BiMailSend}
              title={"Total Orders"}
              color={"#39BAAF"}
              bg={"ordersBg"}
              total={1750}
            />
            <StatCardComponent
              Icon={BiMailSend}
              title={"Total Delivered"}
              color={"#E3B535"}
              bg={"deliveredBg"}
              total={1750}
            />
            <StatCardComponent
              Icon={BiMailSend}
              title={"Total Revenue"}
              color={"#799AFF"}
              bg={"revenueBg"}
              total={1750}
            />
            <StatCardComponent
              Icon={BiMailSend}
              title={"Total Canceled"}
              color={"#DF4B4B"}
              bg={"canceledBg"}
              total={1750}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
