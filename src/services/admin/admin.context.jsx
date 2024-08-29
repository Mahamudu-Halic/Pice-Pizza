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
  const [adminLoading, setAdminLoading] = useState(false)

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


  // * fetch all menu in the database
  const getFood = () => {
    setIsLoading(true);
    requestFood()
      .then((response) => setMenu(response.data))
      .finally(() => {
        setIsLoading(false);
      });
  };

  // * add new toppings to be uploaded to the database
  const addToppings = (newTopping) => {
    // * check if newTopping already exists
    const currentTopping = newIngredients.find(
      (item) => item.name === newTopping.name
    );
    const oldTopping = ingredients.find(
      (item) => item.name === newTopping.name
    );

    if (!currentTopping && !oldTopping) {
      setNewIngredients((prev) => [...prev, newTopping]);
      setName("");
      setPrice("");
      toast.success("added");
    } else {
      toast.error("topping already added");
    }
  };

  // * delete topping from list
  const removeToppings = (name) => {
    const filteredToppings = newIngredients.filter(
      (item) => item.name !== name
    );

    setNewIngredients(filteredToppings);
    toast.error("removed");
  };

  // * reset state variables to default
  const handleReset = () => {
    setDescription("");
    setName("");
    setCategory("");
    setPrice("");
    setSize("");
    setUrl("");
    setFileName("");
  };

  // * fetch all orders made by users on client page
  const getAllOrders = () => {
    setIsLoading(true);
    requestOrders()
      .then((response) => setOrders(response?.data))
      .finally(() => {
        setIsLoading(false);
      });
  };

  const getClientUserOrders = () => {
    requestUserOrder(user?.primaryEmailAddress?.emailAddress)
      .then((response) => setUserOrders(response?.data))
  };

  const getClientUserOrderDetails = (item, id) => {
    setIsLoading(true);
    requestUserOrderItems(id)
      .then((response) =>
        setOrderDetails({ ...item, orderItems: response?.data })
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  const changeOrderStatus = (orderStatus, func) => {
    setIsLoading(true);
    requestUpdateOrderStatus(orderStatus)
      .then(() => {
        toast.success(orderStatus?.status);
        func(orderStatus?.status);
        getAllOrders();
      })
      .finally(() => {
        setIsLoading(false);
      });
  };


  const editIngredient = (ingredientUpdate) => {
    setIsLoading(true);
    requestUpdateIngredientPrice(ingredientUpdate)
      .then((response) => {
        toast.success(response?.data?.message);
        getIngredients();
      })
      .finally(() => {
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

  const DeleteMenu = (id) => {
    requestDeleteMenu(id).then((response) => {
      toast.success(response?.data?.message)
      fetchMenu();
    });
  }

  // * excutes when mounted
  useEffect(() => {
    getIngredients();
    getFood();
    getAllOrders();
    getIsAdmin();
    getAdmins();
    getClientUserOrders()
  }, []);

  useEffect(() => {
    // Function to fetch orders
    const fetchOrders = () => {
      requestOrders().then((response) => setOrders(response?.data));
    };

    // Initial fetch when the component mounts
    fetchOrders();

    // Set up the interval to run fetchOrders every 5 seconds
    const intervalId = setInterval(fetchOrders, 5000);

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
    setAdminLoading,
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
    DeleteMenu
  };
  return (
    <AdminContext.Provider value={values}>{children}</AdminContext.Provider>
  );
};
