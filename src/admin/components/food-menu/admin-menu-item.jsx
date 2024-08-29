import { useContext, useState } from "react";
import { AdminContext } from "../../../services/admin/admin.context";
import { BiEdit } from "react-icons/bi";
import EditMenu from "./edit-menu";
import { MdDeleteOutline } from "react-icons/md";

const AdminMenuItem = ({ menu, toggleRemoveFood }) => {
  const { url, name, size, description, price, _id, enabled } = menu;

  console.log(menu)
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
        <p className="menuItemTitle">
          {name} ({size})
        </p>
        <p className="menuItemPrice red">GHS {price}</p>
        {/* <div className="topMenuItemContent">
        </div> */}
        <hr />
        <p className="menuItemDesc">{description}</p>
        {/* <div className="bottomMenuItemContent">
        </div> */}
      </div>
      <div className="edit-container">
        <div className="status">
          <input
            type="checkbox"
            id="toggle-checkbox"
            className=""
            checked={status}
            // onChange={e => }
          />
          <span className="slider" onClick={handleToggle}></span>
        </div>

        <div className="flex items-center">
        <BiEdit size={20} onClick={toggleEdit} />
        <MdDeleteOutline size={25} onClick={() => toggleRemoveFood(_id, name)}/>
        </div>
      </div>

      {edit && <EditMenu toggleEdit={toggleEdit} menu={menu} />}
    </div>
  );
};

export default AdminMenuItem;
