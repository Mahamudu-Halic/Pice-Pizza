import React from "react";
import { MdDeleteOutline } from "react-icons/md";

const AdminItem = ({ admin, toggleRemoveAdmin }) => {
  return (
    <div className="flex items-center admin-item justify-between">
      <div>
        <p className="admin-email">{admin?.email}</p>
        <p className="admin-role">{admin?.role}</p>
      </div>
      <button
        className="delete-admin-btn"
        onClick={() => toggleRemoveAdmin(admin?._id, admin?.email)}
      >
        <MdDeleteOutline size={25} />
      </button>
    </div>
  );
};

export default AdminItem;
