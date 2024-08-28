import { useContext } from "react";
import AdminMenuItem from "./admin-menu-item";
import { AdminContext } from "../../../services/admin/admin.context";
import { Empty } from "../../../components/empty";

const AdminMenuList = () => {
  const { menu } = useContext(AdminContext);
  
  return (
    <div className="admin-menu-list">
      {menu.length > 0 ? menu.map((menu) => (
        <AdminMenuItem menu={menu} key={menu?._id} />
      )): <Empty caption={"no food menu"}/>
      }

    </div>
  );
};

export default AdminMenuList;
