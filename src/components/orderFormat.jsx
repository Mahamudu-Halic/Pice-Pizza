const OrderFormat = () => {
  return (
    <div className="orderFormat">
      <div className="delivery">
        <h2>Delivery/Pickup</h2>
        <div className="deliveryGroup">
          <input type="radio" name="delivery/pickup" id="pickup" />
          <label htmlFor="pickup">Pickup</label>
        </div>
        <div className="deliveryGroup">
          <input type="radio" name="delivery/pickup" id="delivery" />
          <label htmlFor="delivery">Delivery</label>
        </div>
      </div>

      <div className="info">
        <div className="infoGroup">
          <input
            type="text"
            name="tel"
            id="tel"
            placeholder="Telephone Number"
          />
          <label htmlFor="tel">
            Please Provide a Telephone Number the Dispatch Rider Can Call
          </label>
        </div>
        <div className="infoGroup">
          <input type="text" name="loc" id="loc" placeholder="Location" />
        </div>
      </div>

      <div className="payWith">
        <h3>Pay With</h3>
        <p>MOMO:</p>
        <p>Payment on Deleivery</p>
      </div>

      <button className="redButton">ORDER NOW</button>
    </div>
  );
};

export default OrderFormat;
