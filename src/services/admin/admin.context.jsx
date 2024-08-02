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

  const { user } = useUser();

  // * post new ingredients / toppings to database
  const postIngredients = () => {
    newIngredients &&
      requestPostIngredients(newIngredients)
        .then((response) => {
          toast.success(response?.data?.message);
          getIngredients();
        })
        .catch((error) => {
          toast.error(error?.response?.data?.message);
        });
  };

  // * post food menu to database
  const postFood = (food) => {
    requestPostFood(food)
      .then((response) => {
        toast.success(response?.data?.message);
        getFood();
        handleReset();
      })
      .catch((error) => {
        console.log(error);
        toast.error(error?.response?.data?.message);
      });
  };

  // * fetch all ingredients / toppings in the database
  const getIngredients = () => {
    requestIngredients()
      .then((response) => setIngredients(response.data))
      .catch((error) => console.error(error.response?.data?.message));
  };

  // * fetch all menu in the database
  const getFood = () => {
    requestFood().then((response) => setMenu(response.data));
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
    requestOrders().then((response) => setOrders(response?.data));
  };

  const getClientUserOrders = () => {
    requestUserOrder(user?.primaryEmailAddress?.emailAddress).then((response) =>
      setUserOrders(response?.data)
    );
  };

  const getClientUserOrderDetails = (item, id) => {
    requestUserOrderItems(id).then((response) =>
      setOrderDetails({ ...item, orderItems: response?.data })
    );
  };

  const changeOrderStatus = (orderStatus) => {
    requestUpdateOrderStatus(orderStatus).then(() => {
      toast.success(status);
      getAllOrders();
    });
  };

  const editIngredient = (ingredientUpdate) => {
    requestUpdateIngredientPrice(ingredientUpdate).then((response) => {
      toast.success(response?.data?.message);
      getIngredients();
    });
  };

  const editMenu = (menu) => {
    requestUpdateMenu(menu).then((response) => {
      toast.success(response?.data?.message);
      getFood();
    });
  };

  const getAdmins = () => {
    requestAdmins().then((response) => setAdmins(response?.data));
  };

  const registerAdmin = (admin) => {
    requestRegisterAdmin(admin).then(() => {
      toast.success("admin added");
      getAdmins();
    });
  };

  const getIsAdmin = () => {
    requestIsAdmin(user?.primaryEmailAddress?.emailAddress).then(() =>
      setIsAdmin(true)
    );
  };

  const toggleMenu = (toggleStatus) => {
    requestToggleMenu(toggleStatus).then(() => {
      getFood();
    });
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
  }, []);

  // * pass values to children components
  const values = {
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
