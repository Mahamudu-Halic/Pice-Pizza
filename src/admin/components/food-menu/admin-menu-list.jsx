import { useContext, useState } from "react";
import AdminMenuItem from "./admin-menu-item";
import { AdminContext } from "../../../services/admin/admin.context";

const AdminMenuList = () => {
  const { menu } = useContext(AdminContext);
  
  return (
    <div className="admin-menu-list">
      {menu.map((menu) => (
        <AdminMenuItem menu={menu} key={menu?._id} />
      ))}

    </div>
  );
};

export default AdminMenuList;
