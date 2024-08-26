import { useContext } from "react";
import LatestOrdersList from "./latest-orders-list";
import OrderDetails from "./order-details";
import { DashboardContext } from "../../services/dashboard/dashboard.context";
import { AdminContext } from "../../../services/admin/admin.context";
import { Loader } from "../../../components/loader";

const OrdersComponent = ({title, stat=""}) => {
  const { orderDetails, handleOrderDetails, clearOrderDetails } =
    useContext(DashboardContext);
  const { isLoading } = useContext(AdminContext);
  return isLoading ? (
    <Loader />
  ) : (
    <div className="ordersComponent">
      <div className="latestOrdersContainer">
        <h2>{title}</h2>
        <LatestOrdersList handleOrderDetails={handleOrderDetails} stat={stat}/>
      </div>

      {orderDetails && (
        <div className={`orderDetailsContainer`}>
          <div className="overlay" onClick={clearOrderDetails} />

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
