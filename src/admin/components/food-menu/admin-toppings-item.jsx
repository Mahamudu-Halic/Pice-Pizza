import { useContext, useState } from "react";
import { AdminContext } from "../../../services/admin/admin.context";
import { BiEdit } from "react-icons/bi";
import EditToppings from "./edit-toppings";

const AdminToppingsItem = ({ ingredient }) => {
  const { toggleIngredients } = useContext(AdminContext);

  const { name, price, enable } = ingredient;

  const [status, setStatus] = useState(enable);
  const [edit, setEdit] = useState(false);
  const toggleEdit = () => {
    setEdit((prev) => !prev);
  };

  const handleToggle = (status) => {
    setStatus((prev) => !prev);
    const toggleStatus = {
      name,
      enable: !status,
    };
    toggleIngredients(toggleStatus);
    
  };

  return (
    <div className="admin-menu-item">
      <div className="admin-menu-content">
        <p className="menuItemTitle">{name}</p>
        <p className="menuItemPrice red">GHS {price}</p>
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

        <BiEdit size={20} onClick={toggleEdit} ingredient={ingredient} />
      </div>
      {edit && <EditToppings ingredient={ingredient} toggleEdit={toggleEdit} />}
    </div>
  );
};

export default AdminToppingsItem;
