import { useEffect, useState } from "react";
import { createContext } from "react";
import { requestIngredients, requestPostIngredients } from "./admin.service";
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
  const [imageUrl, setImageUrl] = useState(null);

  const postIngredients = () => {
    newIngredients.trim() &&
      requestPostIngredients(newIngredients)
        .then((response) => {
          toast.success(response?.data?.message);
          getIngredients();
        })
        .catch((error) => toast.error(error?.response?.data?.error));
  };

  const getIngredients = () => {
    requestIngredients()
      .then((response) => setIngredients(response.data))
      .catch((error) => console.error(error.response?.data?.message));
  };

  const addToppings = (newTopping) => {
    const currentTopping = newIngredients.find(item => item.name === newTopping.name)
    const oldTopping = ingredients.find(item => item.name === newTopping.name)

    if (!currentTopping && !oldTopping){
        setNewIngredients((prev) => [...prev, newTopping]);
        setName("")
        setPrice("")
        console.log(newTopping)
        toast.success("added");
    }else{
        toast.error("topping already added")
    }
  };

  const removeToppings = (name) => {
    const filteredToppings = newIngredients.filter(
      (item) => item.name !== name
    );

    setNewIngredients(filteredToppings);
    toast.error("removed");
  };

  useEffect(() => {
    getIngredients();
  }, []);

  console.log(ingredients);

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
    imageUrl,
    setName,
    setPrice,
    setDescription,
    setCategory,
    setSize,
    setImageUrl,
    addToppings,
    removeToppings,
  };
  return (
    <AdminContext.Provider value={values}>{children}</AdminContext.Provider>
  );
};
