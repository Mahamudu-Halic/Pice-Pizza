import { useContext } from "react";
import { OrderContext } from "../services/order/order.context";
const Order = ({ order }) => {
  const { removeOrders } = useContext(OrderContext);
  const { foodTitle, unitPrice, quantity, size, foodId } = order;
  return (
    <div className="order">
      {/* <div className="orderInfoContainer">
        <div className="orderInfoContent">
          <h3>{foodTitle}</h3>
          <p>x{quantity}</p>
          <hr />
        </div>
      </div> */}

      <div className="payment-order-details-container">
        <h3>{foodTitle}</h3>
        <div className="paymentOrderDetails">
          <div className="row">
            <p>Quantity</p>
            <p>{quantity}</p>
          </div>
          <div className="row">
            <p>Size</p>
            <p>{size}</p>
          </div>
          <div className="row">
            <p>Unit Price</p>
            <p>Ghc{unitPrice}</p>
          </div>
          <div className="row">
            <p>Total Price</p>
            <p>Ghc{unitPrice * quantity}</p>
          </div>
        </div>
        <button
          className="add-to-cart-btn"
          onClick={() => removeOrders(foodId)}
        >
          Remove from Cart
        </button>
      </div>
    </div>
  );
};

export default Order;
