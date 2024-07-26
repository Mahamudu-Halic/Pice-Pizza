import React, { useContext, useState } from "react";
import { OrderContext } from "../services/order/order.context";
import { customAlphabet, nanoid } from "nanoid";
import Toppings from "./toppings";
import { toppings as topping } from "../constant";

const MenuModal = ({ menu }) => {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("small");
  const [toppings, setToppings] = useState([]);

  const [unitPrice, setUnitPrice] = useState(Number(menu?.price));

  const addToppings = (value, price) => {
    setToppings((prev) => [...prev, value]);
    setUnitPrice((prevPrice) => parseFloat((prevPrice + Number(price)).toFixed(2)));
  };

  const removeToppings = (value, price) => {
    const filteredMeat = toppings.filter((item) => item !== value);

    setToppings(filteredMeat);
    setUnitPrice((prevPrice) => parseFloat((prevPrice - Number(price)).toFixed(2)));
  };
  const { addOrders } = useContext(OrderContext);
  const nfoodId = customAlphabet("1234567890", 4);

  const handleOrder = () => {
    const foodId = nfoodId()
    const order = {
      foodTitle: menu?.title,
      foodId,
      unitPrice,
      quantity,
      size,
    };

    const postOrder = {
      foodId,
      unitPrice,
      quantity,
      size,
      toppings,
    };

    addOrders(order, postOrder);
  };

  const addQuantity = () => {
    setQuantity(quantity + 1);
  };
  const reduceQuantity = () => {
    if (quantity != 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="menu-modal">
      {/* <h2>Customize Pizza</h2> */}
      <h2>{menu?.title}</h2>

      <section className="req">
        <div className="menu-modal-quantity">
          <h3>Quantity</h3>
          <div className="quantity">
            <button onClick={reduceQuantity}>-</button>
            <p>{quantity}</p>
            <button onClick={addQuantity}>+</button>
          </div>
        </div>
        <div className="menu-modal-size">
          <h3>Size</h3>
          <select name="" id="" onChange={(e) => setSize(e.target.value)}>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>
      </section>

      <div className="toppings">
        <h2>Toppings</h2>
        <Toppings addTopping={addToppings} removeTopping={removeToppings} />
      </div>

      <button className="add-to-cart-btn" onClick={handleOrder}>
        Add to cart
      </button>
    </div>
  );
};

export default MenuModal;
