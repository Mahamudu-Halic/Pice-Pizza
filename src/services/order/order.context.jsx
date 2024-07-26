import { createContext, useEffect, useState } from "react";
import { toast } from "react-toast";
import { requestPostUserOrder } from "./order.service";

export const OrderContext = createContext();

export const OrderContextProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const [postOrders, setPostOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [transport, setTransport] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("");

  const getOrders = () => {
    const order = sessionStorage.getItem(`_orders`);
    const postOrder = sessionStorage.getItem(`_postOrders`);

    if (order && postOrder) {
      setOrders(JSON.parse(order));
      setPostOrders(JSON.parse(postOrder));
    }
  };

  const addOrders = (order, postOrder) => {
    const newOrder = [order, ...orders];
    const newPostOrder = [postOrder, ...postOrders];

    sessionStorage.setItem(`_orders`, JSON.stringify(newOrder));
    sessionStorage.setItem(`_postOrders`, JSON.stringify(newPostOrder));

    setOrders(newOrder);
    setPostOrders(newPostOrder);
  };

  const removeOrders = (foodId) => {
    const filteredPostOrders = postOrders.filter(
      (order) => order.foodId !== foodId
    );
    const filteredOrders = orders.filter((order) => order.foodId !== foodId);

    sessionStorage.setItem(`_orders`, JSON.stringify(filteredOrders));

    sessionStorage.setItem(`_postOrders`, JSON.stringify(filteredPostOrders));

    setOrders(filteredOrders);
    setPostOrders(filteredPostOrders);
  };

  const reset = () => {
    sessionStorage.removeItem(`_orders`)
    sessionStorage.removeItem(`_postOrders`)
    setPhoneNumber("")
    setLocation("")
    setTransport("")
    setOrders([])
    setPostOrders([])
  }

  const placeOrder = (email) => {
   

      const order = {
        email,
        location,
        phoneNumber,
        mode: transport,
        orderItems: postOrders,
      };

      // console.log(order);
      // reset();
  
      requestPostUserOrder(order)
      .then(response => {
        toast.success(response?.data?.message)
        reset()
      })
      .catch(error=> toast.error(error?.response?.data?.message));

    
  };

  useEffect(() => {
    getOrders();
  }, []);

  const value = {
    orders,
    loading,
    error,
    postOrders,
    getOrders,
    addOrders,
    removeOrders,
    placeOrder,
    setPhoneNumber,
    setLocation,
    setTransport,
    phoneNumber,
    transport,
    location
  };

  return (
    <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
  );
};
