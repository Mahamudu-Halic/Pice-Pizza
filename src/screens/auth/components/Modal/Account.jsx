import Overlay from "./Overlay";
import hub from "../../../../assets/hub.png";
import { useNavigate } from "react-router-dom";
import { SignOutButton, useClerk, useUser } from "@clerk/clerk-react";
const Account = (props) => {
  const { user } = useUser();

  const { handleShowModal } = props;
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate("/");
  };

  const toggleAdminDashboard = () => {
    window.location.pathname.includes("/admin")
      ? navigate("/menu")
      : navigate("/admin/dashboard");
  };

  return (
    <>
      <Overlay showModal={handleShowModal} />
      <div className={"userAccount"}>
        <div className="profile-pic">
          <img src={user?.imageUrl || hub} alt="profile pic" />
        </div>
        <div className="userInfo">
          <div className="userNameContainer">
            <p className="userName">Name:</p>
            <p className="userName">{user?.fullName}</p>
            {/* <p className="userName">Mahamudu Halic</p> */}
          </div>
          <div className="userEmailContainer">
            <p className="">Email:</p>
            <p className="userEmail">
              {user?.primaryEmailAddress?.emailAddress}
            </p>
            {/* <p className="userEmail">mahamuduhalic@gmail.com</p> */}
          </div>
        </div>

        <div className="accountButtonContainer">
          {/* <Link to={window.location.pathname.includes("/admin") ? "/dashboard" : "/admin/dashboard" }></Link> */}
          <button className="accountSwitch" onClick={toggleAdminDashboard}>
            {window.location.pathname.includes("/admin")
              ? "Client Menu"
              : "Admin Dashboard"}
          </button>

          <div className="signOut" >
          <SignOutButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
