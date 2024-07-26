import React, { useContext, useState } from "react";
import { BiUpload } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { AdminContext } from "../../services/admin/admin.context";

const AddMenu = ({ toggleMenu }) => {
  const {name, description, size, category, price, imageUrl, setName, setDescription, setSize, setCategory, setPrice, setImageUrl} = useContext(AdminContext)

  const handleMenuUpdate = () => {
    if (
      name.trim() &&
      description.trim() &&
      size.trim() &&
      category.trim() &&
      price.trim() &&
      imageUrl.trim()
    ) {
      const newMenu = {
        name,
        description,
        size,
        price,
        category,
        imageUrl,
      };

      console.log(newMenu);
      handleReset();
    }
  };

  const handleReset = () => {
    setDescription("");
    setName("");
    setCategory("");
    setPrice("");
    setSize("");
    setImageUrl("");
  };

  const handleImageUpload = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImageUrl(url);
    }
  };

  return (
    <div className="toggler">
      <div className="overlay" onClick={toggleMenu} />
      <div className="add-food-menu">
        <div className="add-food-menu-header">
          <h2>Add Food Menu</h2>

          <CgClose onClick={toggleMenu} />
        </div>
        <div className="menu-form form">
          <div className="form-group">
            <label className="image-container" htmlFor="image">
              {imageUrl ? (
                <img src={imageUrl} alt="image" />
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
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="desc">Food Description</label>
            <textarea
              className="description"
              id="desc"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="size">Size</label>
            <select name="" id="size" onChange={(e) => setSize(e.target.value)}>
              <option value="">select size</option>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="cate">Category</label>
            <select id="cate" onChange={(e) => setCategory(e.target.value)}>
              <option value="">select food category</option>
              <option value="Local Food">Local Food</option>
              <option value="Pizza">Pizza</option>
              <option value="Drinks">Drinks</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="text"
              className="price"
              id="price"
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
