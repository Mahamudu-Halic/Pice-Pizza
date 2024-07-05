import React, { useState } from "react";

import "../styles/adminSidebar.css";
import { NavLink } from "react-router-dom";
import { AdminSidebarLinks } from "../../constant";
import { HiMenuAlt2 } from "react-icons/hi";
import Overlay from "../../screens/auth/components/Modal/Overlay";
import { MdClose } from "react-icons/md";

const MobileAdminSidebar = ({ showSidebar, handleShowSidebar }) => {
  return (
    <div className="mobileAdminSidebar">
      {showSidebar && <Overlay showModal={handleShowSidebar} />}
      <div
        className={`adminSidebar mobileAdminSidebar ${
          showSidebar && "showSidebar"
        }`}
      >
        <button className="closeBtn" onClick={handleShowSidebar}>
          <MdClose size={25} />
        </button>

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
    </div>
  );
};

export default MobileAdminSidebar;
