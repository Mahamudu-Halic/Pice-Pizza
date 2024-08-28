import { useContext, useState } from "react";
import { toast, ToastContainer } from "react-toast";
import { AdminContext } from "../../../services/admin/admin.context";
import { CgClose } from "react-icons/cg";

const EditToppings = ({toggleEdit, ingredient}) => {
  const { editIngredient } = useContext(AdminContext);

  // const [name, setName] = useState(ingredient?.name);
  const {name, price, _id} = ingredient

  const [iPrice, setIPrice] = useState(Number(price));

  // const id = ingredient?._id;
  const handleIngredientUpdate = () => {
    const newIngredient = {
      id: _id,
      name,
      price: iPrice,
    };

    if (
      price === iPrice
    ) {
      toast.error("no changes made");
    }
    else if(!iPrice.trim()){
      toast.error("price is required")
    }
    else {
      editIngredient(newIngredient);
      // toggleEdit();

      
    }
  };

  return (
    <div className="toggler">
      <div className="overlay" onClick={toggleEdit} />
      <div className="add-food-menu">
        <ToastContainer delay={3000} position="top-center" />
        <div className="add-food-menu-header">
          <h2>Edit Ingredient</h2>

          <CgClose onClick={toggleEdit} />
        </div>
        <div className="menu-form form">
          
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              disabled
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="text"
              className="price"
              id="price"
              value={iPrice}
              onChange={(e) => setIPrice(e.target.value)}
            />
          </div>
          <button className="food-menu-btn" onClick={handleIngredientUpdate}>
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditToppings;
