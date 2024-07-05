import React, { useContext, useState } from "react";

import "../styles/adminNavbar.css";
import { BiBell, BiSearch } from "react-icons/bi";
import { CgMail } from "react-icons/cg";
import Account from "../../screens/auth/components/Modal/Account";
import { FaRegUserCircle } from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import { HiMenuAlt2 } from "react-icons/hi";
import MobileAdminSidebar from "./.mobile-sidebar";
import { DashboardContext } from "../services/dashboard/dashboard.context";

const AdminNavbar = ({ title }) => {
  const { searchValue, handleSearch } = useContext(DashboardContext);
  const [focus, setFocus] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const handleShowSidebar = () => {
    setShowSidebar((prev) => !prev);
  };

  const handleShowModal = () => {
    setShowModal((prev) => !prev);
  };

  const handleFocus = () => {
    setFocus((prev) => !prev);
  };

  return (
    <div className="adminNavbar">
      <button className="navMenuBtn sidebarBtn" onClick={handleShowSidebar}>
        <HiMenuAlt2 color="black" size={25} />
      </button>
      <MobileAdminSidebar
        showSidebar={showSidebar}
        handleShowSidebar={handleShowSidebar}
      />
      <div className="route">
        <RiArrowRightDoubleLine />
        <h2 className="navTitle">{title}</h2>
      </div>

      <div className="adminNavContainer">
        <div className={`inputContainer ${focus && "focus"}`}>
          <BiSearch size={20} />
          <input
            type="text"
            onFocus={handleFocus}
            onBlur={handleFocus}
            value={searchValue}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search Order ID (e.g. 1234)"
          />
        </div>

        <div className="notificationContainer">
          <button>
            <CgMail size={20} />
          </button>
          <button>
            <BiBell size={20} />
          </button>
        </div>

        <div className="profile">
          <button className={""} onClick={handleShowModal}>
            <FaRegUserCircle size={30} />
          </button>
          {showModal && <Account handleShowModal={handleShowModal} />}
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
