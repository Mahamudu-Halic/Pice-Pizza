import { useContext } from "react";
import Navbar from "../components/navbar";
import OrderFormat from "../components/orderFormat";
import OrderList from "../components/orderList";

import "../styles/payment.css";
import { OrderContext } from "../services/order/order.context";
import { ToastContainer } from "react-toast";
import { Empty } from "../components/empty";

const Payment = () => {
  const { orders } = useContext(OrderContext);

  let total = 0;
  orders.map((order) => (total += order?.quantity * order?.unitPrice));

  return (
    <>
      <ToastContainer delay={3000} position="bottom-right" />
      <div className="payment">
        <Navbar style="navColor" bg="blueBg" />

        <h1>CONFIRM AND ORDER</h1>
        <div className="orderInfo">
          <OrderFormat />
          {orders.length > 0 ? (
            <OrderList total={total} orders={orders} />
          ) : (
            <div className="orderList">
              <Empty caption={"no items in cart"} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Payment;
