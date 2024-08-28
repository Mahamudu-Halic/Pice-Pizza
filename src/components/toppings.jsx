import { useContext } from "react";
import { AdminContext } from "../services/admin/admin.context";

const Toppings = ({ addTopping, removeTopping }) => {
  const { ingredients } = useContext(AdminContext);
  return (
    <div className="toppings-list">
      {ingredients.map((item) => {
        return (
          item?.enable && (
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
                {item?.name} GHS {item?.price}
              </label>
            </div>
          )
        );
      })}
    </div>
  );
};

export default Toppings;
