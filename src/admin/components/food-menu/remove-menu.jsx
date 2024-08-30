import { useContext } from "react";
import { CgClose } from "react-icons/cg";
import { toast, ToastContainer } from "react-toast";
import { AdminContext } from "../../../services/admin/admin.context";
import { ClipLoader } from "react-spinners";

const RemoveMenu = ({ id, toggleRemoveFood, name }) => {
  const { isLoading, DeleteMenu } = useContext(AdminContext);

  return (
    <div className="add-admin-form flex justify-center items-center">
      <div
        className="overlay"
        onClick={() => !isLoading && toggleRemoveFood()}
      />

      <div className="remove-admin flex flex-col">
        <ToastContainer delay={3000} position="top-center" />
        <CgClose size={25} onClick={() => !isLoading && toggleRemoveFood()} />

        <h2>Remove Menu</h2>
        <p>
          Are you sure you want to remove <span>{name}</span> from admin
        </p>
        <button
          onClick={() => DeleteMenu(id, toggleRemoveFood)}
          className="remove-admin-btn"
          disabled={isLoading}
        >
          {isLoading ? <ClipLoader size={20} color="white" /> : "remove menu"}
        </button>
      </div>
    </div>
  );
};

export default RemoveMenu;
