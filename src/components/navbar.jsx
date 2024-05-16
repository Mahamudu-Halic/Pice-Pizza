import { UserButton } from "@clerk/clerk-react";
import { NavLinks } from "../constant";
import { Link } from "react-router-dom";

const Navbar = ({ style = "", absolute = "" }) => {
  console.log(window.location.pathname);
  return (
    <nav className={`navbar ${absolute}`}>
      <h1 className="red poppins">PICE PIZZA</h1>
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
        <UserButton />
      </div>
    </nav>
  );
};

export default Navbar;
