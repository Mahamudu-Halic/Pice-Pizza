import React, { useContext } from "react";
import LatestOrdersList from "./latest-orders-list";
import OrderDetails from "./order-details";
import { DashboardContext } from "../../services/dashboard/dashboard.context";
import Overlay from "../../../screens/auth/components/Modal/Overlay";
import { ToastContainer } from "react-toast";

const OrdersComponent = () => {
  const { orderDetails, handleOrderDetails, clearOrderDetails } =
    useContext(DashboardContext);
  return (
    <div className="ordersComponent">
      <div className="latestOrdersContainer">
        <h2>Latest Orders</h2>
        <LatestOrdersList handleOrderDetails={handleOrderDetails} />
      </div>

      <div className={`orderDetailsContainer ${orderDetails && "orderScale"}`}>
        <ToastContainer delay={3000} position="top-center" />

        <OrderDetails
          order={orderDetails}
          clearOrderDetails={clearOrderDetails}
        />
      </div>
    </div>
  );
};

export default OrdersComponent;
