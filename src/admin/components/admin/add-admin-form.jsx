import { CgClose } from "react-icons/cg";

export const AddAdminForm = ({toggleAdmin}) => {
  return (
    <>
      <div className="overlay" onClick={toggleAdmin} />
      <div className="add-admin-form flex justify-center items-center">
        <div className="admin-form flex flex-col">
            <CgClose size={25} onClick={toggleAdmin}/>
          <div className="admin-form-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className="admin-form-group">
            <label>Admin Password:</label>
            <input type="password" name="adminPassword" />
          </div>

          <button className="add-admin">Add</button>
        </div>
      </div>
    </>
  );
};
