import menu from "../assets/menu.png";

import "../styles/menu.css";
import Heading from "../components/heading";
import MealList from "../components/menu/mealList";
import LandScreen from "./component/landScreen.component";
const Menu = () => {
  return (
    <div className="menuScreen">
      <LandScreen
        image={menu}
        mainHeading="FOOD MENU"
        heading="Explore diverse menu"
      />
      <div className="menu">
        <Heading title={"MENU"} />

        <MealList />
      </div>
    </div>
  );
};

export default Menu;
