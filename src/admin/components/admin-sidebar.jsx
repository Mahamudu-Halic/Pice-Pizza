import React from "react";

import "../styles/adminSidebar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { AdminSidebarLinks } from "../../constant";

const AdminSidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="adminSidebar hideSidebar">
      <h1 className="pice">PICE</h1>

      <div className="adminSidebarContent">
        {AdminSidebarLinks.map((item) => (
          <NavLink
            to={item?.route}
            key={item?.route}
            className={`adminSidebarItem `}
          >
            <item.icon size={20} />
            {item?.title}
          </NavLink>
        ))}
        {/* <button
          onClick={() => navigate("/")}
          className="bottomAdminSidebarItem adminSidebarItem"
        >
          Client Dashboard
        </button> */}
      </div>
    </div>
  );
};

export default AdminSidebar;
