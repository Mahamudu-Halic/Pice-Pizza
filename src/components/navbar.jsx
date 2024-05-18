import { UserButton } from "@clerk/clerk-react";
import { NavLinks } from "../constant";
import { Link } from "react-router-dom";

import shoppingCartImg from "../assets/ShoppingCart.png";

const Navbar = ({
  style = "",
  absolute = "",
  shoppingCart = false,
  bg = "",
}) => {
  console.log(window.location.pathname);
  return (
    <nav className={`navbar ${absolute} ${bg}`}>
      <Link to={"/"}>
        <h1 className="red poppins">PICE PIZZA</h1>
      </Link>
      <div className="navLinks">
        {NavLinks.map((item, index) => (
          <Link
            key={index}
            to={item.route}
            className={`${
              window.location.pathname === item.route && "active"
            } ${style}`}
          >
            {item.title}
          </Link>
        ))}
        {shoppingCart && (
          <Link to={"/shopping-cart"} className="shoppingCartBtn">
            <div className="cartNumberContainer">
              <p className="cartNumber">5</p>
            </div>
            <img src={shoppingCartImg} alt="shopping cart" width={30} />
          </Link>
        )}
        <UserButton />
      </div>
    </nav>
  );
};

export default Navbar;
