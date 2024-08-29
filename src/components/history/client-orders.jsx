import { useContext } from "react";
import { AdminContext } from "../../services/admin/admin.context";
import LatestOrders from "../../admin/components/dashboard/latest-orders";
import { DashboardContext } from "../../admin/services/dashboard/dashboard.context";
import ClientOrderItem from "./client-order-item";
import { Empty } from "../empty";

const ClientOrders = () => {
  const { userOrders, orders } = useContext(AdminContext);
  const { orderDetails, handleOrderDetails, clearOrderDetails } =
    useContext(DashboardContext);
  return (
    <>
      <div className="latestOrdersContainer">
        <div className="latestOrdersList">
          {userOrders.length > 0 ? (
            userOrders
              .slice()
              .reverse()
              .map((item) => (
                <div
                  className="latestOrderInfo"
                  key={item?._id}
                  onClick={() => handleOrderDetails(item, item?._id)}
                >
                  <LatestOrders order={item} />
                </div>
              ))
          ) : (
            <Empty caption={"no orders"} />
          )}
        </div>
      </div>
      {orderDetails && (
        <div className={`orderDetailsContainer`}>
          <div className="overlay" onClick={clearOrderDetails} />

          <ClientOrderItem
            order={orderDetails}
            clearOrderDetails={clearOrderDetails}
          />
        </div>
      )}
    </>
  );
};

export default ClientOrders;
