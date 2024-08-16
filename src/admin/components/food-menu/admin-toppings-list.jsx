import React, { useContext } from "react";
import { AdminContext } from "../../../services/admin/admin.context";
import AdminToppingsItem from "./admin-toppings-item";
import { Empty } from "../../../components/empty";

const AdminToppingsList = () => {
  const { ingredients } = useContext(AdminContext);

  return (
    <div>
      {ingredients.length > 0 ? (
        ingredients.map((item) => {
          return <AdminToppingsItem ingredient={item} key={item?.name} />;
        })
      ) : (
        <Empty caption={"no ingredients"} />
      )}
    </div>
  );
};

export default AdminToppingsList;
