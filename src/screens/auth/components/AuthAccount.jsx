import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const AuthAccount = ({ title, url }) => {
  const navigate = useNavigate();
  const handleSignIn = (e) => {
    e.preventDefault();
    // window.location.pathname = "/dashboard";
    navigate("/dashboard");
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };
  return (
    <div className={"auth"}>
      <div>
        <h1>Welcome to PicePizza</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate,
          odit?
        </p>
      </div>
      <form onSubmit={title == "Sign In" ? handleSignIn : handleSignUp}>
        <h2>{title}</h2>

        {title == "Sign In" ? (
          <p className={"account"}>
            Don&apos;t have an account?{" "}
            <NavLink to={url}>Create an account</NavLink>
          </p>
        ) : (
          <p className={"account"}>
            Already have an account? <NavLink to={url}>Sign In</NavLink>
          </p>
        )}

        {title == "Sign Up" && <input type="text" placeholder={"Name"} />}
        <input type="email" placeholder={"Email"} />
        <input type="password" placeholder={"Password"} />
        <button>{title}</button>
      </form>
    </div>
  );
};

export default AuthAccount;
