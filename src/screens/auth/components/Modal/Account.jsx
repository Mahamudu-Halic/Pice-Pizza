import React from "react";
import Overlay from "./Overlay";
import hub from "../../../../assets/hub.png";
import { Link, useNavigate } from "react-router-dom";
const Account = (props) => {
  const { handleShowModal } = props;
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate("/");
  };

  const toggleAdminDashboard = () => {
    window.location.pathname.includes("/admin")
      ? navigate("/dashboard")
      : navigate("/admin/dashboard");
  };

  return (
    <>
      <Overlay showModal={handleShowModal} />
      <div className={"userAccount"}>
        <div className="profile-pic">
          <img src={hub} alt="profile pic" />
        </div>
        <div className="userInfo">
          <div className="userNameContainer">
            <p className="userName">Name:</p>
            <p className="userName">Mahamudu Halic</p>
          </div>
          <div className="userEmailContainer">
            <p className="">Email:</p>
            <p className="userEmail">mahamuduhalic@gmail.com</p>
          </div>
        </div>

        <div className="accountButtonContainer">
          {/* <Link to={window.location.pathname.includes("/admin") ? "/dashboard" : "/admin/dashboard" }></Link> */}
          <button className="accountSwitch" onClick={toggleAdminDashboard}>
            {window.location.pathname.includes("/admin")
              ? "Client Dashboard"
              : "Admin Dashboard"}
          </button>

          <button className="signOut" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      </div>
    </>
  );
};

export default Account;
