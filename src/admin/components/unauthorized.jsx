import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AdminContext } from "../../services/admin/admin.context";
import { Loader } from "../../components/loader";

const Unauthorized = () => {
  const navigate = useNavigate();

  const { adminLoading } = useContext(AdminContext);
  return (
    <div className="unauthorized">
      {adminLoading ? (
        <Loader />
      ) : (
        <>
          <h3>You are no authorized to view this page</h3>
          <button onClick={() => navigate("/menu")}>Go back to menu</button>
        </>
      )}
    </div>
  );
};

export default Unauthorized;
