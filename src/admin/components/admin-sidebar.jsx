import React from "react";

import "../styles/adminSidebar.css";
import { NavLink } from "react-router-dom";
import { AdminSidebarLinks } from "../../constant";

const AdminSidebar = () => {
  return (
    <div className="adminSidebar">
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
      </div>
    </div>
  );
};

export default AdminSidebar;
