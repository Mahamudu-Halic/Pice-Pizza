import { useEffect, useState } from "react";
import { createContext } from "react";
import {
  requestAdmins,
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

  const { user } = useUser();

  // * post new ingredients / toppings to database
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

  // * post food menu to database
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

  // * fetch all ingredients / toppings in the database
  const getIngredients = () => {
    setIsLoading(true);
    requestIngredients()
      .then((response) => setIngredients(response.data))
      .catch((error) => console.error(error.response?.data?.message))
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
    setIsLoading(true);
    requestUserOrder(user?.primaryEmailAddress?.emailAddress)
      .then((response) => setUserOrders(response?.data))
      .finally(() => {
        setIsLoading(false);
      });
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

  // console.log(orders)

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

  const editMenu = (menu) => {
    setIsLoading(true);
    requestUpdateMenu(menu)
      .then((response) => {
        toast.success(response?.data?.message);
        getFood();
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const getAdmins = () => {
    setIsLoading(true);
    requestAdmins()
      .then((response) => setAdmins(response?.data))
      .finally(() => {
        setIsLoading(false);
      });
  };

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

  const getIsAdmin = () => {
    setIsLoading(true);
    requestIsAdmin(user?.primaryEmailAddress?.emailAddress)
      .then(response => setIsAdmin(response?.data?.isAdmin))
      .finally(() => {
        setIsLoading(false);
      });
  };

  const toggleMenu = (toggleStatus) => {
    requestToggleMenu(toggleStatus);
    // .then(() => {
    //   getFood();
    // })
  };

  const toggleIngredients = (toggleStatus) => {
    requestToggleIngredients(toggleStatus);
    // .then(() => {
    //   getIngredients()
    // })
  };

  // * excutes when mounted
  useEffect(() => {
    getIngredients();
    getFood();
    getAllOrders();
    getIsAdmin();
    getAdmins();
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
  };
  return (
    <AdminContext.Provider value={values}>{children}</AdminContext.Provider>
  );
};
