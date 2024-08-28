import "../styles/menu.css";
import Heading from "../components/heading";
import MealList from "../components/menu/mealList";
import Navbar from "../components/navbar";
import { useContext, useEffect, useState } from "react";
import { AdminContext } from "../services/admin/admin.context";
import MenuList from "../components/menu/menuList";
const Menu = () => {
  const { menu } = useContext(AdminContext);
  const [recommendedItems, setRecommendedItems] = useState([]);
  const getRandomItems = (arr, numItems) => {
    const shuffled = arr.sort(() => 0.5 - Math.random());
    setRecommendedItems(shuffled.slice(0, numItems));
  };

  useEffect(() => {
    getRandomItems(menu, 3);
  }, [menu]);
  return (
    <div className="menuScreen">
      {/* <LandScreen
        image={menu}
        mainHeading="FOOD MENU"
        heading="Explore diverse menu"
      /> */}
      <Navbar style={"navColor"} bg="blueBg" />
      <div className="menu">
        {recommendedItems.length > 0 && (
          <>
            <Heading title={"Recommended Menu"} />
            <div className="menuList">
              {recommendedItems.map(
                (menu) =>
                  menu?.enabled && <MenuList menu={menu} key={menu?._id} />
              )}
            </div>
          </>
        )}
        <Heading title={"MENU"} />

        <MealList />
      </div>
    </div>
  );
};

export default Menu;
