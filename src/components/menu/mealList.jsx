import { useContext, useState } from "react";
import { MealListItems, MenuListItems } from "../../constant";
import Meal from "./meal";
import MenuList from "./menuList";
import { AdminContext } from "../../services/admin/admin.context";

const MealList = () => {
  const [currentMeal, setCurrentMeal] = useState("Breakfast");

  const {menu} = useContext(AdminContext)

  return (
    <div className="mealList">
      {/* <div className="cardList mealListContainer">
        {MealListItems.map((meal) => (
          <Meal
            meal={meal}
            key={meal.title}
            currentMeal={currentMeal}
            setCurrentMeal={setCurrentMeal}
          />
        ))}
      </div> */}

      <div className="menuList">
        {menu.map((menu) => (
          <MenuList menu={menu} key={menu?._id} />
        ))}
      </div>
    </div>
  );
};

export default MealList;
