import { useState } from "react";
import { MealListItems, MenuListItems } from "../../constant";
import Meal from "./meal";
import MenuList from "./menuList";

const MealList = () => {
  const [currentMeal, setCurrentMeal] = useState("Breakfast");
  return (
    <div className="mealList">
      <div className="cardList">
        {MealListItems.map((meal) => (
          <Meal
            meal={meal}
            key={meal.title}
            currentMeal={currentMeal}
            setCurrentMeal={setCurrentMeal}
          />
        ))}
      </div>

      <div className="menuList">
        {MenuListItems[currentMeal.toLowerCase()].map((menu) => (
          <MenuList menu={menu} key={menu.id} />
        ))}
      </div>
    </div>
  );
};

export default MealList;
