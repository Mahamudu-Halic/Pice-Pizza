import { useContext } from "react";
import { OrderContext } from "../services/order/order.context";

const OrderFormat = ({ confirmOrder }) => {

  const { setLocation, setTransport, setPhoneNumber, location, phoneNumber, transport} = useContext(OrderContext)
  return (
    <div className="orderFormat">
      <div className="delivery">
        <h2>Delivery/Pickup</h2>
        <div className="deliveryGroup">
          <input
            type="radio"
            name="delivery/pickup"
            id="pickup"
            checked={transport === "pickup"}
            onChange={(e) => e.target.checked && setTransport("pickup")}
          />
          <label htmlFor="pickup">Pickup</label>
        </div>
        <div className="deliveryGroup">
          <input
            type="radio"
            name="delivery/pickup"
            id="delivery"
            checked={transport === "delivery"}
            onChange={(e) => e.target.checked && setTransport("delivery")}
          />
          <label htmlFor="delivery">Delivery</label>
        </div>
      </div>

      <div className="info">
        <div className="infoGroup">
          <input
            type="text"
            name="tel"
            id="tel"
            value={phoneNumber}
            placeholder="Telephone Number"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <label htmlFor="tel">
            Please Provide a Telephone Number the Dispatch Rider Can Call
          </label>
        </div>
        <div className="infoGroup">
          <input
            type="text"
            name="loc"
            id="loc"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
      </div>

      <div className="payWith">
        <h3>Pay With</h3>
        <p>MOMO:</p>
        <p>Payment on Deleivery</p>
      </div>

      <button className="redButton" onClick={confirmOrder}>ORDER NOW</button>
     
    </div>
  );
};

export default OrderFormat;
