import customizeBg from "../assets/customizeBg.png";
import LandScreen from "./component/landScreen.component";

import "../styles/service.css";

import slice from "../assets/slice.png";
import halfPizza from "../assets/halfPizza.png";
import { useState } from "react";
const Service = () => {
  const [quantity, setQuantity] = useState(1);

  const addQuantity = () => {
    setQuantity(quantity + 1);
  };
  const reduceQuantity = () => {
    if (quantity != 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className="service">
      <LandScreen
        image={customizeBg}
        mainHeading="PIZZA"
        heading="THE WAY YOU WANT IT"
        getStarted={true}
        fontFamily="poppins"
        shoppingCart={true}
      />

      <div className="serviceHeading">
        <h1>CREATE PIZZA</h1>
        <hr />
      </div>
      <div className="serviceContainer">
        <div className="seviceContents">
          <div className="serviceSize">
            <h2>SIZE</h2>
            <div className="serviceSizeList">
              <div className="sizeGroup">
                <input type="radio" name="pizzaSize" id="small" />
                <label htmlFor="small">Small</label>
              </div>
              <div className="sizeGroup">
                <input type="radio" name="pizzaSize" id="medium" />
                <label htmlFor="medium">Medium</label>
              </div>
              <div className="sizeGroup">
                <input type="radio" name="pizzaSize" id="large" />
                <label htmlFor="large">Large</label>
              </div>
            </div>
          </div>

          <div className="serviceQuantity">
            <h2>QUANTITY</h2>
            {/* <input
              type="number"
              name=""
              id="quantity"
              min={1}
              placeholder="0"
            /> */}
            <div className="quantity">
              <button onClick={reduceQuantity}>-</button>
              <p>{quantity}</p>
              <button onClick={addQuantity}>+</button>
            </div>
            {/* <select name="quantity" id="quantity">
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="other">Other:</option>
        </select>

        <input type="text" /> */}
          </div>

          <div className="serviceToppings">
            <h2>TOPPINGS</h2>
            <hr />

            <div className="serviceToppingsList">
              <div className="serviceToppingsListItem">
                <label htmlFor="sauces">Sauces</label>
                <select name="saurces" id="sauces">
                  <option value="">Select Sauce</option>
                </select>
              </div>
              
            </div>
          </div>

          <div className="addToCartBtnContainer">
            <button className="addToCartBtn">ADD TO CART</button>
          </div>
        </div>

        <div className="halfPizza">
          <img src={halfPizza} alt="" width={150} />
        </div>
        <div className="serviceImage">
          <img src={slice} alt="" width={150} />
        </div>
      </div>
    </div>
  );
};

export default Service;
