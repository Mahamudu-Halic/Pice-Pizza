import React, { useContext } from "react";
import { toppings as topping } from "../constant";
import { AdminContext } from "../services/admin/admin.context";

const Toppings = ({ addTopping, removeTopping }) => {
  const { ingredients } = useContext(AdminContext);
  console.log(ingredients);
  return (
    <div className="toppings-list">
      {ingredients.map((item) => {
        return (
          <div className="toppings-item" key={item?.name}>
            <input
              type="checkbox"
              name={item?.name}
              id={item?.name}
              onClick={(e) =>
                e.target.checked
                  ? addTopping(e.target.name, item?.price)
                  : removeTopping(e.target.name, item?.price)
              }
            />
            <label htmlFor={item?.name}>
              {item?.name} GHC {item?.price}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default Toppings;
