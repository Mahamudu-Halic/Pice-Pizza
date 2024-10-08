import { useContext } from "react";
import Navbar from "../components/navbar";
import { AdminContext } from "../services/admin/admin.context";
import { DashboardContextProvider } from "../admin/services/dashboard/dashboard.context";
import { Loader } from "../components/loader";
import ClientOrders from "../components/history/client-orders";

const HistoryScreen = () => {
  const { isLoading } = useContext(AdminContext);
  return (
    <DashboardContextProvider>
      <div className="historyScreen">
        {isLoading ? (
          <div className="" style={{ height: "100vh" }}>
            <Loader />
          </div>
        ) : (
          <>
            <Navbar style={"navColor"} bg="blueBg" />
            <div className="ordersComponent">
              <ClientOrders />
            </div>
          </>
        )}
      </div>
    </DashboardContextProvider>
  );
};

export default HistoryScreen;
