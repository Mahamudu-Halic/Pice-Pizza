import { useContext, useEffect, useState } from "react";
import Navbar from "../components/navbar";
import OrderFormat from "../components/orderFormat";
import OrderList from "../components/orderList";

import "../styles/payment.css";
import { OrderContext } from "../services/order/order.context";
import { useUser } from "@clerk/clerk-react";
import { toast, ToastContainer } from "react-toast";

const Payment = () => {
  const { orders, placeOrder, postOrders } = useContext(OrderContext);
  const { user } = useUser();

  let total = 0;
  orders.map((order) => (total += order?.quantity * order?.unitPrice));

  const confirmOrder = () => {
      const email = user?.primaryEmailAddress?.emailAddress;
      placeOrder(email);
  };

  return (
    <>
      <ToastContainer delay={3000} position="bottom-right" />
      <div className="payment">
        <Navbar style="navColor" bg="blueBg" />

        <h1>CONFIRM AND ORDER</h1>
        <div className="orderInfo">
          <OrderFormat
            confirmOrder={confirmOrder}
          />
          <OrderList total={total} orders={orders} />
        </div>
      </div>
    </>
  );
};

export default Payment;
