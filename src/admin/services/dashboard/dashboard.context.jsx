import { createContext, useEffect, useState } from "react";
import { OrderListItems } from "../../../constant";

export const DashboardContext = createContext();

export const DashboardContextProvider = ({ children }) => {
  const [orderDetails, setOrderDetails] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [filteredOrderListItems, setFilteredOrderListItems] =
    useState(OrderListItems);
  const handleSearch = (value) => {
    setSearchValue(value);
  };
  const handleOrderDetails = (item) => {
    setOrderDetails(item);
  };

  const clearOrderDetails = () => {
    setOrderDetails(null);
  };

  const handleFilter = () => {
    setFilteredOrderListItems(() =>
      OrderListItems.filter((item) => item.orderId.includes(searchValue))
    );
  };

  useEffect(() => {
    handleFilter();
  }, [searchValue]);

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
