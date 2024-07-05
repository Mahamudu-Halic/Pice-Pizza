import React, { Fragment } from "react";
import LatestOrders from "./latest-orders";
import { OrderListItems } from "../../../constant";

const LatestOrdersList = ({ handleOrderDetails }) => {
  return (
    <div className="latestOrdersList">
      {OrderListItems.map((item) => (
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
