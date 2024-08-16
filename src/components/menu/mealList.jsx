import { useContext, useState } from "react";
import { MealListItems, MenuListItems } from "../../constant";
import Meal from "./meal";
import MenuList from "./menuList";
import { AdminContext } from "../../services/admin/admin.context";
import { Empty } from "../empty";
import { Loader } from "../loader";

const MealList = () => {
  const { menu, isLoading } = useContext(AdminContext);

  return (
    <div className="mealList">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="menuList">
          {menu.length > 0 ? (
            menu.map((menu) => <MenuList menu={menu} key={menu?._id} />)
          ) : (
            <Empty caption="no menus found" />
          )}
        </div>
      )}
    </div>
  );
};

export default MealList;
