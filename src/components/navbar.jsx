import { UserButton } from "@clerk/clerk-react";
import { NavLinks } from "../constant";
import { Link } from "react-router-dom";
import { HiMenuAlt2 } from "react-icons/hi";
import { MdClose } from "react-icons/md";

import shoppingCartImg from "../assets/ShoppingCart.png";
import { useState } from "react";

const Navbar = ({
  style = "",
  absolute = "",
  shoppingCart = false,
  bg = "",
}) => {
  const [showNav, setShowNav] = useState(false);
  return (
    <nav className={`navbarContainer ${absolute} ${bg}`}>
      <button className="navMenuBtn" onClick={() => setShowNav(true)}>
        <HiMenuAlt2 color="white" size={25} />
      </button>
      <div className={`navbar ${showNav && "showNav"}`}>
        <button className="closeBtn" onClick={() => setShowNav(false)}>
          <MdClose size={25} />
        </button>
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
        </div>
      </div>
      <div className="cartContainer">
        <Link to={"/shopping-cart"} className={`${style} shoppingCartBtn`}>
          <div className="cartNumberContainer">
            <p className="cartNumber">5</p>
          </div>
          <img src={shoppingCartImg} alt="shopping cart" width={30} />
        </Link>
        <UserButton />
      </div>
    </nav>
  );
};

export default Navbar;
