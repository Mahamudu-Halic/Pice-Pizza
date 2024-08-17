import { useState } from "react";
import AdminItem from "./admin-item";
import RemoveAdmin from "./remove-admin";

const AdminList = ({ admins }) => {
  const [showRemoveAdmin, setShowRemoveAdmin] = useState(false);
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");

  const toggleRemoveAdmin = (id = "", email = "") => {
    setShowRemoveAdmin((prev) => !prev);
    setId(id);
    setEmail(email);
  };

  return (
    <>
      <div className="admin-list flex">
        {admins.map((admin) => {
          return (
            <AdminItem
              key={admin?._id}
              admin={admin}
              toggleRemoveAdmin={toggleRemoveAdmin}
            />
          );
        })}
      </div>

      {showRemoveAdmin && (
        <RemoveAdmin
          toggleRemoveAdmin={toggleRemoveAdmin}
          email={email}
          id={id}
        />
      )}
    </>
  );
};

export default AdminList;
