import Navbar from "../components/navbar";
import OrderFormat from "../components/orderFormat";
import OrderList from "../components/orderList";

import "../styles/payment.css";

const Payment = () => {
  return (
    <div className="payment">
      <Navbar style="navColor" bg="blueBg" />

      <h1>CONFIRM AND ORDER</h1>
      <div className="orderInfo">
        <OrderFormat />
        <OrderList />
      </div>
    </div>
  );
};

export default Payment;
