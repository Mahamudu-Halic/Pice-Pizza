import React, { Fragment, useContext } from "react";
import LatestOrders from "./latest-orders";
import { OrderListItems } from "../../../constant";
import { DashboardContext } from "../../services/dashboard/dashboard.context";

const LatestOrdersList = ({ handleOrderDetails }) => {
  const { filteredOrderListItems } = useContext(DashboardContext);
  return (
    <>
    <div className="latestOrdersList">
      {filteredOrderListItems
        .map((item) => (
          item?.status === "pending" && <div
          className="latestOrderInfo"
          key={item?._id}
          onClick={() => handleOrderDetails(item, item?._id)}
          >
            <LatestOrders order={item} />
          </div>
        ))}
    </div>
    <div className="latestOrdersList">
      {filteredOrderListItems
        .map((item) => (
          item?.status !== "pending" && <div
          className="latestOrderInfo"
          key={item?._id}
          onClick={() => handleOrderDetails(item, item?._id)}
          >
            <LatestOrders order={item} />
          </div>
        ))}
    </div>
        </>
  );
};

export default LatestOrdersList;
