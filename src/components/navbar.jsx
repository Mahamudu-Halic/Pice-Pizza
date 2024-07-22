import { UserButton } from "@clerk/clerk-react";
import { NavLinks } from "../constant";
import { Link } from "react-router-dom";
import { HiMenuAlt2 } from "react-icons/hi";
import { MdClose } from "react-icons/md";

import shoppingCartImg from "../assets/ShoppingCart.png";
import { useState } from "react";
import Account from "../screens/auth/components/Modal/Account";
import { FaRegUserCircle } from "react-icons/fa";
import Overlay from "../screens/auth/components/Modal/Overlay";

const Navbar = ({
  style = "",
  absolute = "",
  shoppingCart = false,
  bg = "",
}) => {
  const [showNav, setShowNav] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal((prev) => !prev);
  };

  const handleShowNav = () => {
    setShowNav((prev) => !prev);
  };
  return (
    <>
      <nav className={`navbarContainer ${absolute} ${bg}`}>
        {showNav && <Overlay showModal={handleShowNav} />}
        <button className="navMenuBtn" onClick={handleShowNav}>
          <HiMenuAlt2 color="white" size={25} />
        </button>
        <div className={`navbar ${showNav && "showNav"}`}>
          <button className="closeBtn" onClick={handleShowNav}>
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

          {/* <UserButton /> */}
          <div className="profile">
            <button className={""} onClick={handleShowModal}>
              <FaRegUserCircle size={30} />
            </button>
            {showModal && <Account handleShowModal={handleShowModal} />}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
