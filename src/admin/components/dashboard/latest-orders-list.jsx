import React, { Fragment, useContext } from "react";
import LatestOrders from "./latest-orders";
import { OrderListItems } from "../../../constant";
import { DashboardContext } from "../../services/dashboard/dashboard.context";
import { Empty } from "../../../components/empty";

const LatestOrdersList = ({ handleOrderDetails }) => {
  const { filteredOrderListItems } = useContext(DashboardContext);
  return filteredOrderListItems.length > 0 ? (
    <>
      <div className="latestOrdersList">
        {filteredOrderListItems.map(
          (item) =>
            item?.status === "pending" && (
              <div
                className="latestOrderInfo"
                key={item?._id}
                onClick={() => handleOrderDetails(item, item?._id)}
              >
                <LatestOrders order={item} />
              </div>
            )
        )}
      </div>
      <div className="latestOrdersList">
        {filteredOrderListItems.map(
          (item) =>
            item?.status !== "pending" && (
              <div
                className="latestOrderInfo"
                key={item?._id}
                onClick={() => handleOrderDetails(item, item?._id)}
              >
                <LatestOrders order={item} />
              </div>
            )
        )}
      </div>
    </>
  ) : (
    <Empty caption={"no orders"} />
  );
};

export default LatestOrdersList;
