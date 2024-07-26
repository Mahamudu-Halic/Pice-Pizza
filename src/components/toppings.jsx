import React from "react";
import { toppings as topping } from "../constant";

const Toppings = ({ addTopping, removeTopping }) => {
  return (
    <div className="toppings-list">
      {
        topping.map((item) => {
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
              <label htmlFor={item?.name}>{item?.name} GHC {item?.price}</label>
            </div>
          );
        })}
    </div>
  );
};

export default Toppings;
