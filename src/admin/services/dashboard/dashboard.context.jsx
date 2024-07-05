import { createContext, useState } from "react";

export const DashboardContext = createContext();

export const DashboardContextProvider = ({ children }) => {
  const [orderDetails, setOrderDetails] = useState(null);
  const handleOrderDetails = (item) => {
    setOrderDetails(item);
  };

  const clearOrderDetails = () => {
    setOrderDetails(null);
  };

  const value = {
    orderDetails,
    handleOrderDetails,
    clearOrderDetails,
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};
