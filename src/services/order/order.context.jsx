import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toast";
import { requestCurrentUserOrder, requestPostUserOrder } from "./order.service";
import { useUser } from "@clerk/clerk-react";
import { AdminContext } from "../admin/admin.context";

export const OrderContext = createContext();

export const OrderContextProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  const [transport, setTransport] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("");
  const [currentUserOrder, setCurrentUserOrder] = [];

  const { getClientUserOrders } = useContext(AdminContext);

  const { user } = useUser();

  const getOrders = () => {
    const order = sessionStorage.getItem(`_orders`);

    if (order) {
      setOrders(JSON.parse(order));
    }
  };

  const addOrders = (order) => {
    const newOrder = [order, ...orders];

    sessionStorage.setItem(`_orders`, JSON.stringify(newOrder));

    setOrders(newOrder);
  };

  const removeOrders = (foodId) => {
    const filteredOrders = orders.filter((order) => order.foodId !== foodId);

    sessionStorage.setItem(`_orders`, JSON.stringify(filteredOrders));

    setOrders(filteredOrders);
  };

  const reset = () => {
    sessionStorage.removeItem(`_orders`);
    sessionStorage.removeItem(`_postOrders`);
    setPhoneNumber("");
    setLocation("");
    setTransport("");
    setOrders([]);
  };

  const placeOrder = () => {
    const order = {
      email: user?.primaryEmailAddress?.emailAddress,
      location,
      phoneNumber,
      mode: transport,
      orderItems: orders,
    };

    requestPostUserOrder(order)
      .then((response) => {
        toast.success(response?.data?.message);
        getClientUserOrders();
        reset();
      })
      .catch((error) => toast.error(error?.response?.data?.message));
  };

  const getCurrentUserOrder = () => {
    requestCurrentUserOrder(user?.primaryEmailAddress?.emailAddress).then(
      (response) => setCurrentUserOrder(response?.data)
    );
  };

  useEffect(() => {
    getOrders();
  }, []);

  const value = {
    getCurrentUserOrder,
    currentUserOrder,
    orders,
    // loading,
    // error,
    getOrders,
    addOrders,
    removeOrders,
    placeOrder,
    setPhoneNumber,
    setLocation,
    setTransport,
    phoneNumber,
    transport,
    location,
  };

  return (
    <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
  );
};
