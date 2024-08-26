import { useContext, useState } from "react";
import { AdminContext } from "../../../services/admin/admin.context";
import { BiEdit } from "react-icons/bi";
import EditMenu from "./edit-menu";

const AdminMenuItem = ({ menu }) => {
  const { url, name, size, description, price, _id, enabled } = menu;

  const { toggleMenu } = useContext(AdminContext);

  const [status, setStatus] = useState(enabled);
  const [edit, setEdit] = useState(false);

  const handleToggle = () => {
    setStatus((prev) => !prev);
    const toggleStatus = {
      id: _id,
      status: !status ? "enable" : "disable",
    };
    toggleMenu(toggleStatus);
    console.log(toggleStatus);
  };

  const toggleEdit = () => {
    setEdit((prev) => !prev);
  };
  return (
    <div className="admin-menu-item">
      <div className="admin-menu-img">
        <img src={url} alt={name} width={150} />
      </div>

      <div className="admin-menu-content">
        <div className="topMenuItemContent">
          <p className="menuItemTitle">
            {name} ({size})
          </p>
          <p className="menuItemPrice red">GHC {price}</p>
        </div>
        <hr />
        <div className="bottomMenuItemContent">
          <p className="menuItemDesc">{description}</p>
        </div>
      </div>
      <div className="edit-container">
        <div className="status">
          <input
            type="checkbox"
            id="toggle-checkbox"
            className=""
            checked={status}
            // onChange={e => console.log("clic")}
          />
          <span className="slider" onClick={handleToggle}></span>
        </div>

        <BiEdit size={20} onClick={toggleEdit} />
      </div>

      {edit && <EditMenu toggleEdit={toggleEdit} menu={menu} />}
    </div>
  );
};

export default AdminMenuItem;
