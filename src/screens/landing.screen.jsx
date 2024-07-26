import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Homepage from "../components/landing/homepage";
import CardList from "../components/landing/cardList";
import AboutUs from "../components/landing/aboutUs";
import TestimonialList from "../components/landing/testimonialList";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="landingNav">
        <Link to={"/"}>
          <h2 className="red poppins">PICE PIZZA</h2>
        </Link>
        <div className="landingNavBtn">
          <button
            onClick={() => navigate("/menu")}
            className="getStartedBtn redButton"
          >
            Order Now
          </button>
          {/* <button
            onClick={() => navigate("/auth/sign-up")}
            className="signUpBtn"
          >
            Sign up
          </button> */}
        </div>
      </div>
      <div className="homeScreen">
        <Homepage />
        <CardList />
        <AboutUs />
        <TestimonialList />
      </div>
    </div>
  );
};

export default LandingPage;
