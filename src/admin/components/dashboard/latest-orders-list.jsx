import { useContext, useEffect, useState } from "react";
import LatestOrders from "./latest-orders";
import { DashboardContext } from "../../services/dashboard/dashboard.context";
import { Empty } from "../../../components/empty";

const LatestOrdersList = ({ handleOrderDetails, stat = "" }) => {
  const { filteredOrderListItems } = useContext(DashboardContext);
  const [pendingItems, setPendingItems] =
    useState([]);

    useEffect(() => {
      setPendingItems(() =>
        filteredOrderListItems.filter((item) => item?.status === "pending")
      );
    }, [filteredOrderListItems])
  return filteredOrderListItems.length > 0 ? (
    stat === "pending" ? (
      // <div className="latestOrdersList">
      //   {filteredOrderListItems.map((item) =>
      //     item?.status === "pending" && (
      //       <div
      //         className="latestOrderInfo"
      //         key={item?._id}
      //         onClick={() => handleOrderDetails(item, item?._id)}
      //       >
      //         <LatestOrders order={item} />
      //       </div>
      //     )
      //   )}
      // </div>
      <div className="latestOrdersList">
        {pendingItems.length > 0 ? pendingItems.map((item) =>
         (
            <div
              className="latestOrderInfo"
              key={item?._id}
              onClick={() => handleOrderDetails(item, item?._id)}
            >
              <LatestOrders order={item} />
            </div>
          )
        ): <Empty caption={"no pending orders"} />}
      </div>
    ) : (
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
    )
  ) : (
    <Empty caption={"no orders"} />
  );
};

export default LatestOrdersList;
