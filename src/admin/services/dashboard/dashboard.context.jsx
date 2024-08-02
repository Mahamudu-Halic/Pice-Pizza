import { createContext, useContext, useEffect, useState } from "react";
import { OrderListItems } from "../../../constant";
import { AdminContext } from "../../../services/admin/admin.context";
import { requestUserOrderItems } from "../../../services/admin/admin.service";

export const DashboardContext = createContext();

export const DashboardContextProvider = ({ children }) => {
  const {orders} = useContext(AdminContext)
  const [orderDetails, setOrderDetails] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [filteredOrderListItems, setFilteredOrderListItems] =
    useState([]);

    // console.log(orders)
  const handleSearch = (value) => {
    setSearchValue(value);
  };
  const handleOrderDetails = (item, id) => {
    requestUserOrderItems(id).then(response => setOrderDetails({...item, orderItems: response?.data}))
  };


  const clearOrderDetails = () => {
    setOrderDetails(null);
  };

  const handleFilter = () => {
    setFilteredOrderListItems(() =>
      orders.filter((item) => item?._id.includes(searchValue))
    );
  };

  useEffect(() => {
    orders.length > 0 && handleFilter();
  }, [searchValue, orders]);

  const value = {
    orderDetails,
    searchValue,
    filteredOrderListItems,
    handleSearch,
    handleOrderDetails,
    clearOrderDetails,
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};
