import { useContext, useState } from "react";
import AdminMenuItem from "./admin-menu-item";
import { AdminContext } from "../../../services/admin/admin.context";
import { Empty } from "../../../components/empty";
import RemoveMenu from "./remove-menu";

const AdminMenuList = () => {
  const { menu } = useContext(AdminContext);

  const [showRemoveMenu, setShowRemoveMenu] = useState(false)
  const [id, setId] = useState("")
  const [name, setName] = useState("")


  const toggleRemoveFood = (id = "", name = "") => {
    setShowRemoveMenu(prev => !prev)
    setId(id)
    setName(name)
  }
  
  return (
    <div className="admin-menu-list">
      {menu.length > 0 ? menu.map((menu) => (
        <AdminMenuItem menu={menu} key={menu?._id} toggleRemoveFood={toggleRemoveFood} />
      )): <Empty caption={"no food menu"}/>
      }

      {
        showRemoveMenu && (
          <RemoveMenu 
            toggleRemoveFood={toggleRemoveFood}
            id={id}
            name={name}
          />
        )
      }
    </div>
  );
};

export default AdminMenuList;
