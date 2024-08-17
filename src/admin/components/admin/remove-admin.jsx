import { useContext } from "react";
import { CgClose } from "react-icons/cg";
import { toast, ToastContainer } from "react-toast";
import { AdminContext } from "../../../services/admin/admin.context";
import { ClipLoader } from "react-spinners";

const RemoveAdmin = ({ id, email, toggleRemoveAdmin }) => {
  const { isLoading } = useContext(AdminContext);

  const handleRemoveAdmin = () => {
    const admin = {
      id,
      email,
    };

    toast.success("removed admin");
  };

  return (
    <div className="add-admin-form flex justify-center items-center">
      <div
        className="overlay"
        onClick={() => !isLoading && toggleRemoveAdmin()}
      />

      <div className="remove-admin flex flex-col">
        <ToastContainer delay={3000} position="top-center" />
        <CgClose size={25} onClick={() => !isLoading && toggleRemoveAdmin()} />

        <h2>Remove Admin</h2>
        <p>
          Are you sure you want to remove <span>{email}</span> from admin
        </p>
        <button
          onClick={handleRemoveAdmin}
          className="remove-admin-btn"
          disabled={isLoading}
        >
          {isLoading ? <ClipLoader size={20} color="white" /> : "remove admin"}
        </button>
      </div>
    </div>
  );
};

export default RemoveAdmin;
