import React, { useContext } from "react";
import LatestOrdersList from "./latest-orders-list";
import OrderDetails from "./order-details";
import { DashboardContext } from "../../services/dashboard/dashboard.context";

const OrdersComponent = () => {
  const { orderDetails, handleOrderDetails, clearOrderDetails } =
    useContext(DashboardContext);
  return (
    <div className="ordersComponent">
      <div className="latestOrdersContainer">
        <h2>Latest Orders</h2>
        <LatestOrdersList handleOrderDetails={handleOrderDetails} />
      </div>

      {orderDetails && (
        <div className="orderDetailsContainer">
          <h2>Order Details</h2>
          <OrderDetails
            order={orderDetails}
            clearOrderDetails={clearOrderDetails}
          />
        </div>
      )}
    </div>
  );
};

export default OrdersComponent;
