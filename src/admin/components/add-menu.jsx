import React, { useContext, useState } from "react";
import { BiUpload } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { AdminContext } from "../../services/admin/admin.context";
import { ToastContainer } from "react-toast";

const AddMenu = ({ toggleMenu }) => {
  const {
    name,
    fileName,
    setFileName,
    description,
    size,
    category,
    price,
    url,
    setName,
    setDescription,
    setSize,
    setCategory,
    setPrice,
    setUrl,
    postFood,
  } = useContext(AdminContext);

  const handleMenuUpdate = () => {
    const newMenu = {
      name,
      description,
      size,
      price: Number(price),
      category,
      url,
      fileName,
    };

    console.log(newMenu);
    postFood(newMenu);
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
      <div className="overlay" onClick={toggleMenu} />
      <div className="add-food-menu">
        <ToastContainer delay={3000} position="top-center" />
        <div className="add-food-menu-header">
          <h2>Add Food Menu</h2>

          <CgClose onClick={toggleMenu} />
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
            <label htmlFor="cate">Category</label>
            <select
              id="cate"
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            >
              <option value="">select food category</option>
              <option value="Local Food">Local Food</option>
              <option value="Pizza">Pizza</option>
              <option value="Shakes and Smoothies">Shakes and Smoothies</option>
              <option value="Continental">Continental</option>
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
            Add Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddMenu;
