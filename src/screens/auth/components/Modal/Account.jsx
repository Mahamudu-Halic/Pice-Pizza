import React from "react";
import Overlay from "./Overlay";
import hub from "../../../../assets/hub.png";
const Account = (props) => {
  const { handleShowModal } = props;
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

        <a className="signOut" href={"/"}>
          <button>Sign Out</button>
        </a>
      </div>
    </>
  );
};

export default Account;
