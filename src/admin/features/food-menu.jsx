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
import { Loader } from "../../components/loader";

const FoodMenu = () => {
  const [showToppings, setShowToppings] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showMenuList, setShowMenuList] = useState(true);
  const [showToppingsList, setShowToppingsList] = useState(false);
  const { handleReset } = useContext(AdminContext);

  const { menu, ingredients, isLoading } = useContext(AdminContext);

  const toggleToppings = () => {
    setShowToppings((prev) => !prev);
    handleReset();
  };
  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
    handleReset();
  };

  const handleMenuList = () => {
    setShowMenuList(true)
    setShowToppingsList(false)
  }
  const handleToppingsList = () => {
    setShowMenuList(false)
    setShowToppingsList(true)
  }
  return (
    <DashboardContextProvider>
      <div className="admin">
        <AdminSidebar />
        <div className="adminContent">
          <AdminNavbar title={"Food Menu"} />
          <div className="foodMenu adminPage">
            <div className="flex justify-between">
              <div className="flex menu-buttons main-buttons">
                <button onClick={handleMenuList} className={`${showMenuList && "isActive"}`}>Menu</button>
                <button onClick={handleToppingsList} className={`${showToppingsList && "isActive"}`}>Toppings</button>
              </div>
              <div className="add-btns flex menu-buttons">
                <button onClick={toggleMenu}>Add to menu</button>
                <button onClick={toggleToppings}>Add to toppings</button>
              </div>
            </div>

            {isLoading ? (
              <Loader />
            ) : (
              <>
                {showMenuList && <AdminMenuList />}
                {showToppingsList && <AdminToppingsList />}
              </>
            )}

            {showMenu && <AddMenu toggleMenu={toggleMenu} />}
            {showToppings && <AddToppings toggleToppings={toggleToppings} />}
          </div>
        </div>
      </div>
    </DashboardContextProvider>
  );
};

export default FoodMenu;
