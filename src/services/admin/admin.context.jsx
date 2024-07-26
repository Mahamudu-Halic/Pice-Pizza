import { useEffect, useState } from "react";
import { createContext } from "react";
import {
  requestFood,
  requestIngredients,
  requestOrders,
  requestPostFood,
  requestPostIngredients,
} from "./admin.service";
import { toast } from "react-toast";

export const AdminContext = createContext();

export const AdminContextProvider = ({ children }) => {
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
  const [orders, setOrders] = useState([])

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

  const getIngredients = () => {
    requestIngredients()
      .then((response) => setIngredients(response.data))
      .catch((error) => console.error(error.response?.data?.message));
  };

  const getFood = () => {
    requestFood().then((response) => setMenu(response.data));
  };

  const addToppings = (newTopping) => {
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
      console.log(newTopping);
      toast.success("added");
    } else {
      toast.error("topping already added");
    }
  };

  const removeToppings = (name) => {
    const filteredToppings = newIngredients.filter(
      (item) => item.name !== name
    );

    setNewIngredients(filteredToppings);
    toast.error("removed");
  };

  const handleReset = () => {
    setDescription("");
    setName("");
    setCategory("");
    setPrice("");
    setSize("");
    setUrl("");
    setFileName("");
  };

  const getOrders = () => {
    requestOrders().then((response) => setOrders(response?.data)) 
  }

  useEffect(() => {
    getIngredients();
    getFood();
    // getOrders();
  }, []);

  // console.log(orders);

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
  };
  return (
    <AdminContext.Provider value={values}>{children}</AdminContext.Provider>
  );
};
