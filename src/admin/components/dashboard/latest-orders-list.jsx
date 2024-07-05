import React, { Fragment, useContext } from "react";
import LatestOrders from "./latest-orders";
import { OrderListItems } from "../../../constant";
import { DashboardContext } from "../../services/dashboard/dashboard.context";

const LatestOrdersList = ({ handleOrderDetails }) => {
  const { filteredOrderListItems } = useContext(DashboardContext);
  return (
    <div className="latestOrdersList">
      {filteredOrderListItems.map((item) => (
        <div
          className="latestOrder"
          key={item?.orderId}
          onClick={() => handleOrderDetails(item)}
        >
          <LatestOrders order={item} />
        </div>
      ))}
    </div>
  );
};

export default LatestOrdersList;
