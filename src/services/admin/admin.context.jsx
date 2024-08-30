import { useEffect, useState } from "react";
import { createContext } from "react";
import {
  requestAdmins,
  requestDeleteMenu,
  requestFood,
  requestIngredients,
  requestIsAdmin,
  requestOrders,
  requestPostFood,
  requestPostIngredients,
  requestRegisterAdmin,
  requestToggleIngredients,
  requestToggleMenu,
  requestUpdateIngredientPrice,
  requestUpdateMenu,
  requestUpdateOrderStatus,
  requestUserOrder,
  requestUserOrderItems,
} from "./admin.service";
import { toast } from "react-toast";
import { useUser } from "@clerk/clerk-react";

// * create admin context
export const AdminContext = createContext();

// * export context provider
export const AdminContextProvider = ({ children }) => {
  // * state variables
  const [ingredients, setIngredients] = useState([]);
  const [newIngredients, setNewIngredients] = useState([]);
  const [menu, setMenu] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [size, setSize] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [url, setUrl] = useState(null);
  const [fileName, setFileName] = useState("");
  const [orders, setOrders] = useState([]);
  const [orderDetails, setOrderDetails] = useState(null);
  const [userOrders, setUserOrders] = useState([]);
  const [admins, setAdmins] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [adminLoading, setAdminLoading] = useState(false);

  const { user } = useUser();

  /**
   * Post a list of ingredients to the database
   * If the request is successful, show a success toast with the response message
   * and fetch the updated list of ingredients.
   * If the request fails, show an error toast with the response message.
   * Finally, set isLoading to false to hide the loading indicator.
   */
  const postIngredients = () => {
    setIsLoading(true);
    newIngredients &&
      requestPostIngredients(newIngredients)
        .then((response) => {
          toast.success(response?.data?.message);
          getIngredients();
        })
        .catch((error) => {
          toast.error(error?.response?.data?.message);
        })
        .finally(() => {
          setIsLoading(false);
        });
  };

  /**
   * Post a new menu item to the database
   * @param {Object} food - The menu item to post
   * @returns {Promise} - A promise that resolves when the request is finished
   */
  const postFood = (food) => {
    setIsLoading(true);
    requestPostFood(food)
      .then((response) => {
        toast.success(response?.data?.message);
        getFood();
        handleReset();
      })
      .catch((error) => {
        console.log(error);
        toast.error(error?.response?.data?.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  /**
   * Fetch all ingredients / toppings from the database
   * Sets the ingredients state to the response data
   * Shows an error toast if the request fails
   * Finally, set isLoading to false to hide the loading indicator.
   */
  const getIngredients = () => {
    setIsLoading(true);
    requestIngredients()
      .then((response) => setIngredients(response.data))
      .catch((error) => {
        console.error(error.response?.data?.message);
        toast.error(error?.response?.data?.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  /**
   * Fetch all menu items in the database
   * Sets the menu state to the response data
   * Shows an error toast if the request fails
   * Finally, set isLoading to false to hide the loading indicator.
   */
  const getFood = () => {
    setIsLoading(true);
    requestFood()
      .then((response) => setMenu(response.data))
      .catch((error) => {
        toast.error(error?.response?.data?.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  /**
   * Add a new topping to the list of toppings to be uploaded to the database
   * @param {Object} newTopping - An object containing the name and price of the new topping
   * @returns {void}
   */
  const addToppings = (newTopping) => {
    // * check if newTopping already exists
    const currentTopping = newIngredients.find(
      (item) => item.name === newTopping.name
    );
    const oldTopping = ingredients.find(
      (item) => item.name === newTopping.name
    );

    /**
     * If the topping does not exist in the current list of toppings or the
     * list of toppings from the database, add it to the list of new toppings
     * and clear the name and price input fields.
     */
    if (!currentTopping && !oldTopping) {
      setNewIngredients((prev) => [...prev, newTopping]);
      setName("");
      setPrice("");
      toast.success("added");
    } else {
      // * if the topping already exists, show an error toast
      toast.error("topping already added");
    }
  };

  /**
   * Remove a topping from the list of new toppings to be uploaded to the database
   * @param {string} name - The name of the topping to be removed
   * @returns {void}
   */
  const removeToppings = (name) => {
    // * filter out the topping from the list of new toppings
    const filteredToppings = newIngredients.filter(
      (item) => item.name !== name
    );

    // * set the new list of toppings to the filtered list
    setNewIngredients(filteredToppings);

    // * show a toast message indicating that the topping has been removed
    toast.error("removed");
  };

  /**
   * Resets all state variables to their default values.
   * This function is called whenever the user wants to add a new menu item.
   * @returns {void}
   */
  const handleReset = () => {
    // * reset description to default
    setDescription("");
    // * reset name to default
    setName("");
    // * reset category to default
    setCategory("");
    // * reset price to default
    setPrice("");
    // * reset size to default
    setSize("");
    // * reset url to default
    setUrl("");
    // * reset file name to default
    setFileName("");
  };

  /**
   * Fetch all orders made by users on the client side
   * @returns {Promise<void>}
   * A promise that resolves when the request is finished
   */
  const getAllOrders = () => {
    // * set isLoading to true to display a loading indicator
    setIsLoading(true);
    // * fetch all orders from the database
    requestOrders()
      .then((response) => {
        // * set the orders state to the response data
        setOrders(response?.data);
      })
      .finally(() => {
        // * set isLoading to false to hide the loading indicator
        setIsLoading(false);
      });
  };

  /**
   * Fetch all orders made by the current user on the client side
   * @returns {Promise<void>}
   * A promise that resolves when the request is finished
   */
  const getClientUserOrders = () => {
    // * fetch all orders made by the current user from the database
    requestUserOrder(user?.primaryEmailAddress?.emailAddress).then(
      (response) => {
        // * set the userOrders state to the response data
        setUserOrders(response?.data);
      }
    );
  };

  /**
   * Fetch the order details of a specific order made by the current user
   * @param {Object} item - The order item to fetch the details for
   * @param {string} id - The id of the order to fetch the details for
   * @returns {Promise<void>}
   * A promise that resolves when the request is finished
   */
  const getClientUserOrderDetails = (item, id) => {
    // * set isLoading to true to display a loading indicator
    setIsLoading(true);
    // * fetch the order items of the specific order from the database
    requestUserOrderItems(id)
      .then((response) => {
        // * set the orderDetails state to the response data
        setOrderDetails({ ...item, orderItems: response?.data });
      })
      .finally(() => {
        // * set isLoading to false to hide the loading indicator
        setIsLoading(false);
      });
  };

  /**
   * Update the status of an order in the database
   * @param {Object} orderStatus - The order status to update
   * @param {Function} func - A callback function to execute after the request is finished
   * @returns {Promise<void>}
   * A promise that resolves when the request is finished
   */
  const changeOrderStatus = (orderStatus, func) => {
    // * set isLoading to true to display a loading indicator
    setIsLoading(true);
    // * update the order status in the database
    requestUpdateOrderStatus(orderStatus)
      .then(() => {
        // * show a success toast with the updated order status
        toast.success(orderStatus?.status);
        // * execute the callback function with the updated order status
        func(orderStatus?.status);
        // * refetch the orders list
        getAllOrders();
      })
      .finally(() => {
        // * set isLoading to false to hide the loading indicator
        setIsLoading(false);
      });
  };

  /**
   * Update an ingredient in the database
   * @param {Object} ingredientUpdate - The ingredient to update
   * @returns {Promise<void>}
   * A promise that resolves when the request is finished
   */
  const editIngredient = (ingredientUpdate) => {
    // * set isLoading to true to display a loading indicator
    setIsLoading(true);

    // * update the ingredient in the database
    requestUpdateIngredientPrice(ingredientUpdate)
      .then((response) => {
        // * show a success toast with the response message
        toast.success(response?.data?.message);
        // * refetch the ingredients
        getIngredients();
      })
      .finally(() => {
        // * set isLoading to false to hide the loading indicator
        setIsLoading(false);
      });
  };

  /**
   * Update a menu item in the database
   * @param {Object} menu - The menu item to update
   */
  const editMenu = (menu) => {
    setIsLoading(true);
    requestUpdateMenu(menu)
      .then((response) => {
        // Show a success toast with the response message
        toast.success(response?.data?.message);
        // Refetch the menu items
        getFood();
      })
      .finally(() => {
        // Set isLoading to false to hide the loading indicator
        setIsLoading(false);
      });
  };

  /**
   * Fetch all admin users from the database
   * Sets the isLoading state to true before the request and false after
   * Sets the admins state to the response data
   */
  const getAdmins = () => {
    setIsLoading(true);
    requestAdmins()
      .then((response) => setAdmins(response?.data))
      .finally(() => {
        setIsLoading(false);
      });
  };

  /**
   * Register a new admin
   * @param {Object} admin - Object with name and email
   * Calls the requestRegisterAdmin function and then calls getAdmins to refetch the admins
   * Shows a success toast with the response message
   * Sets isLoading to false after the request is finished
   */
  const registerAdmin = (admin) => {
    setIsLoading(true);
    requestRegisterAdmin(admin)
      .then((response) => {
        toast.success(response?.data?.message);
        getAdmins();
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  /**
   * Checks if the current user is an admin
   * Sets the isAdmin state to the response data
   * Sets AdminLoading to false after the request is finished
   */
  const getIsAdmin = () => {
    setAdminLoading(true);
    requestIsAdmin(user?.primaryEmailAddress?.emailAddress)
      .then((response) => setIsAdmin(response?.data?.isAdmin))
      .finally(() => {
        setAdminLoading(false);
      });
  };

  /**
   * Fetch all menu items from the database
   * Sets the menu state to the response data
   */
  const fetchMenu = () => {
    requestFood().then((response) => setMenu(response.data));
  };

  /**
   * Fetch all ingredients / toppings from the database
   * Sets the ingredients state to the response data
   */
  const fetchIngredients = () => {
    requestIngredients().then((response) => setIngredients(response.data));
  };

  /**
   * Function to fetch all orders from the database
   * @returns {Promise<void>}
   * A promise that resolves when the request is finished
   */
  const fetchOrders = () => {
    /**
     * Fetch all orders from the database
     * Set the orders state to the response data
     */
    requestOrders().then((response) => setOrders(response?.data));
  };

  const fetchAllItems = () => {
    requestFood().then((response) => setMenu(response.data));
    requestIngredients().then((response) => setIngredients(response.data));
    requestOrders().then((response) => setOrders(response?.data));
  };

  /**
   * Toggle the status of a menu item in the database
   * @param {{id: string, status: "enable" | "disable"}} toggleStatus
   * The object containing the id of the menu item and the status to toggle to
   * After the request is finished, refetch the menu items
   */
  const toggleMenu = (toggleStatus) => {
    requestToggleMenu(toggleStatus).then(() => {
      fetchMenu();
    });
  };

  /**
   * Toggle the status of an ingredient in the database
   * @param {{name: string, status: "enable" | "disable"}} toggleStatus
   * The object containing the name of the ingredient and the status to toggle to
   * @returns {Promise<void>}
   * A promise that resolves when the request is finished
   */
  const toggleIngredients = (toggleStatus) => {
    requestToggleIngredients(toggleStatus).then(() => {
      fetchIngredients();
    });
  };

  /**
   * Delete a menu item from the database
   * @param {string} id - The id of the menu item to delete
   * @returns {Promise<void>} - A promise that resolves when the request is finished
   */
  const DeleteMenu = (id, toggleRemoveFood) => {
    /**
     * Send a DELETE request to the server to delete the menu item
     * @param {string} id - The id of the menu item to delete
     * @returns {Promise<AxiosResponse>} - The response from the server
     */

    requestDeleteMenu(id).then((response) => {
      /* Show a success toast with the response message */
      toast.success(response?.data?.message);
      setTimeout(() => {
        toggleRemoveFood();
      }, 1200);
      /* Refetch the menu items */
      fetchMenu();
    });
  };

  // * excutes when mounted
  useEffect(() => {
    getIngredients();
    getFood();
    getAllOrders();
    getIsAdmin();
    getAdmins();
    getClientUserOrders();
  }, []);

  useEffect(() => {
    // Initial fetch when the component mounts
    fetchAllItems();

    // Set up the interval to run fetchAllItems every 5 seconds
    const intervalId = setInterval(fetchAllItems, 5000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  // * pass values to children components
  const values = {
    isLoading,
    ingredients,
    menu,
    postIngredients,
    setNewIngredients,
    newIngredients,
    name,
    price,
    description,
    category,
    size,
    url,
    fileName,
    adminLoading,
    postFood,
    setFileName,
    setName,
    setPrice,
    setDescription,
    setCategory,
    setSize,
    setUrl,
    addToppings,
    removeToppings,
    handleReset,
    orders,
    getAllOrders,
    getClientUserOrders,
    getClientUserOrderDetails,
    userOrders,
    orderDetails,
    isAdmin,
    registerAdmin,
    toggleIngredients,
    toggleMenu,
    editIngredient,
    editMenu,
    changeOrderStatus,
    admins,
    DeleteMenu,
  };
  return (
    <AdminContext.Provider value={values}>{children}</AdminContext.Provider>
  );
};
