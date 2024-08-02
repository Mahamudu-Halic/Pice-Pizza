import React, { useContext, useState } from "react";
import AdminNavbar from "../components/admin-navbar";
import AdminSidebar from "../components/admin-sidebar";
import { DashboardContextProvider } from "../services/dashboard/dashboard.context";
import AddMenu from "../components/add-menu";
import AddToppings from "../components/add-toppings";
import "../styles/foodMenu.css";
import { AdminContext } from "../../services/admin/admin.context";
import AdminMenuList from "../components/food-menu/admin-menu-list";
import AdminToppingsList from "../components/food-menu/admin-toppings-list";

const FoodMenu = () => {
  const [showToppings, setShowToppings] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const {handleReset} = useContext(AdminContext)

  const {menu, ingredients} = useContext(AdminContext)

  const toggleToppings = () => {
    setShowToppings((prev) => !prev);
    handleReset()
  };
  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
    handleReset()
  };
  return (
    <DashboardContextProvider>
      
      <div className="admin">
        <AdminSidebar />
        <div className="adminContent">
          <AdminNavbar title={"Food Menu"} />
          <div className="foodMenu adminPage">
            <div className="add-btn">
              <button onClick={toggleMenu}>Add to menu</button>
              <button onClick={toggleToppings}>Add to toppings</button>
            </div>

            <AdminMenuList />
            <AdminToppingsList />

            {showMenu && <AddMenu toggleMenu={toggleMenu} />}
            {showToppings && <AddToppings toggleToppings={toggleToppings} />}
          <p>display food menus here</p>
          </div>

        </div>
      </div>
    </DashboardContextProvider>
  );
};

export default FoodMenu;
