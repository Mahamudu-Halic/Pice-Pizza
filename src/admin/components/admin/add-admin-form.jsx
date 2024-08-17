import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { ClipLoader } from "react-spinners";
import { toast, ToastContainer } from "react-toast";

export const AddAdminForm = ({ toggleAdmin, registerAdmin, isLoading }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleAdminRegistration = () => {
    if (email?.trim() && password.trim()) {
      const admin = { email, password };
      registerAdmin(admin);
      setEmail("");
      setPassword("");
    } else {
      toast.error("all fields required");
      return;
    }
  };
  return (
    <>
      <div className="add-admin-form flex justify-center items-center">
        <div className="overlay" onClick={toggleAdmin} />

        <div className="admin-form flex flex-col">
          <ToastContainer delay={3000} position="top-center" />
          <CgClose size={25} onClick={toggleAdmin} />
          <div className="admin-form-group">
            <label htmlFor="email">Email</label>
            <input
              disabled={isLoading}
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="admin-form-group">
            <label htmlFor="adminId">Admin Id:</label>
            <input
              disabled={isLoading}
              type={showPassword ? "text" : "password"}
              name="adminId"
              id="adminId"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="show-password"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? "hide password" : "show password"}
            </button>
          </div>

          <button
            className="add-admin"
            onClick={handleAdminRegistration}
            disabled={isLoading}
          >
            {isLoading ? <ClipLoader size={25} /> : "save"}
          </button>
        </div>
      </div>
    </>
  );
};
