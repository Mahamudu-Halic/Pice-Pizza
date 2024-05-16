import Navbar from "../components/navbar";
import menu from "../assets/menu.png";
import Overlay from "../modules/overlay.module";

import "../styles/menu.css";
import Heading from "../components/heading";
import MealList from "../components/menu/mealList";
const Menu = () => {
  return (
    <div className="menuScreen">
      <div className="menuHeader">
        <Overlay />
        <div className="bgImage">
          <img src={menu} alt="menu" />
        </div>
        <Navbar style={"white"} />
        <div className="menuHeaderContentContainer">
          <div className="menuHeaderContent">
            <h1 className="white">FOOD MENU</h1>

            <Heading title={"Explore diverse menu"} />
          </div>
        </div>
      </div>

      <div className="menu">
        <Heading title={"MENU"} />

        <MealList />
      </div>
    </div>
  );
};

export default Menu;
