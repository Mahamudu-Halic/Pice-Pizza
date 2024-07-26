import React, { useContext, useState } from "react";
import { CgClose } from "react-icons/cg";
import { AdminContext } from "../../services/admin/admin.context";
import { ToastContainer } from "react-toast";

const AddToppings = ({ toggleToppings }) => {
  const {
    addToppings,
    removeToppings,
    newIngredients,
    price,
    name,
    setPrice,
    setName,
  } = useContext(AdminContext);

  const handleUpdateTopping = () => {
    if (price.trim() && name.trim()) {
      const newTopping = { price, name };

      addToppings(newTopping);
    }
  };

  return (
    <div className="toggler">
      <div className="overlay" onClick={toggleToppings} />
      <div className="add-toppings">
      <ToastContainer delay={3000} position="top-center" />
        <div className="add-toppings-header">
          <h2>Add Toppings</h2>
          <CgClose onClick={toggleToppings} />
        </div>
        <div className="toppings-form form">
          {/* <div className="form-group">
            <label htmlFor="topping">Toppings</label>
            <select id="topping" onChange={(e) => setTopping(e.target.value)}>
              <option value="">select topping</option>
              <option value="Cheese">Cheese</option>
              <option value="Veggies">Veggies</option>
              <option value="Meat">Meat</option>
              <option value="Sauce">Sauce</option>
            </select>
          </div> */}
          <div className="form-group">
            <label htmlFor="topping-name">Name</label>
            <input
              type="text"
              id="topping-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="topping-price">Price</label>
            <input
              type="text"
              className="price"
              id="topping-price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="new-ingredients">
            {newIngredients.map((item) => {
              return (
                <div className="new-ingredient-item" key={item?.name}>
                  {item?.name}
                  <CgClose size={15} color="red" onClick={() => removeToppings(item?.name)}/>
                </div>
              )
            })}
          </div>

          <div className="topping-btns">
            <button className="add-topping" onClick={handleUpdateTopping}>
              Add Topping
            </button>
            <button className="post-toppings" onClick={handleUpdateTopping}>
              Post Toppings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToppings;
