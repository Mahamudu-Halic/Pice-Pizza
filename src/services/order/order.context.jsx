import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toast";
import { requestCurrentUserOrder, requestPostUserOrder } from "./order.service";
import { useUser } from "@clerk/clerk-react";
import { AdminContext } from "../admin/admin.context";

export const OrderContext = createContext();

export const OrderContextProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const [postOrders, setPostOrders] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  const [transport, setTransport] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("");
  const [currentUserOrder, setCurrentUserOrder] = ([])

  const {getAllOrders} = useContext(AdminContext)

  const {user} = useUser()

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

  const placeOrder = () => {
      const order = {
        email: user?.primaryEmailAddress?.emailAddress,
        location,
        phoneNumber,
        mode: transport,
        orderItems: postOrders,
      };
  
      requestPostUserOrder(order)
      .then(response => {
        toast.success(response?.data?.message)
        getAllOrders()
        reset()
      })
      .catch(error=> toast.error(error?.response?.data?.message));

    
  };

  const getCurrentUserOrder = () => {
    requestCurrentUserOrder(user?.primaryEmailAddress?.emailAddress)
    .then(response => setCurrentUserOrder(response?.data))
  }

  useEffect(() => {
    getOrders();
  }, []);

  const value = {
    getCurrentUserOrder,
    currentUserOrder,
    orders,
    // loading,
    // error,
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
