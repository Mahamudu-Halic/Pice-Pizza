import { useContext, useState } from "react";
import { toast, ToastContainer } from "react-toast";
import { CgClose } from "react-icons/cg";
import { BiUpload } from "react-icons/bi";
import { AdminContext } from "../../../services/admin/admin.context";

const EditMenu = ({ toggleEdit, menu }) => {
  const { editMenu } = useContext(AdminContext);

  const [name, setName] = useState(menu?.name);
  const [description, setDescription] = useState(menu?.description);
  const [size, setSize] = useState(menu?.size);
  const [url, setUrl] = useState(menu?.url);
  const [fileName, setFileName] = useState("");
  const [price, setPrice] = useState(Number(menu?.price));

  const id = menu?._id;
  const handleMenuUpdate = () => {
    let newMenu;
    if (fileName === "") {
      newMenu = {
        name,
        description,
        size,
        price: Number(price),
        id,
      };
    } else {
      newMenu = {
        name,
        description,
        size,
        price: Number(price),
        url,
        fileName,
        id,
      };
    }

    if (
      name === menu?.name &&
      size === menu?.size &&
      description === menu?.description &&
      price === menu?.price &&
      url === menu?.url
    ) {
      toast.error("no changes made");
    } else {
      editMenu(newMenu);
      toggleEdit();

      // 
    }
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => resolve(fileReader.result);
      fileReader.onerror = (error) => reject(error);
    });
  };

  const handleImageUpload = async (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const base64 = await convertBase64(file);
      setFileName(file.name);
      setUrl(base64);
    }
  };

  return (
    <div className="toggler">
      <div className="overlay" onClick={toggleEdit} />
      <div className="add-food-menu">
        <ToastContainer delay={3000} position="top-center" />
        <div className="add-food-menu-header">
          <h2>Edit Menu</h2>

          <CgClose onClick={toggleEdit} />
        </div>
        <div className="menu-form form">
          <div className="form-group">
            <label className="image-container" htmlFor="image">
              {url ? (
                <img src={url} alt="image" />
              ) : (
                <div>
                  <BiUpload size={20} /> <p>Upload Image</p>
                </div>
              )}
            </label>
            <input
              type="file"
              onChange={(e) => handleImageUpload(e)}
              id="image"
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="desc">Food Description</label>
            <textarea
              className="description"
              id="desc"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="size">Size</label>
            <select
              name=""
              id="size"
              onChange={(e) => setSize(e.target.value)}
              value={size}
            >
              <option value="">select size</option>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="text"
              className="price"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <button className="food-menu-btn" onClick={handleMenuUpdate}>
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditMenu;
