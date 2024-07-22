import { useContext, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../services/auth/auth.context";
import { VscError } from "react-icons/vsc";
import { HashLoader } from "react-spinners";

const AuthAccount = ({ title, url }) => {
  const navigate = useNavigate();

  const {
    registerUser,
    login,
    error,
    handleReset,
    status,
    isLoading,
    email,
    password,
    phoneNumber,
    name,
    setEmail,
    setPassword,
    setName,
    setPhoneNumber,
  } = useContext(AuthContext);

  const handleSignIn = (e) => {
    e.preventDefault();

    // navigate("/dashboard");

    login();
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    registerUser();
  };

  useEffect(() => {
    status === 201 && error === null && navigate("/verify");
  }, [status, error]);

  useEffect(() => {
    handleReset();
  }, [title]);
  return (
    <div className={"auth"}>
      <div>
        <h1>Welcome to PicePizza</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate,
          odit?
        </p>
      </div>
      <form
        onSubmit={(e) =>
          title == "Sign In" ? handleSignIn(e) : handleSignUp(e)
        }
      >
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

        {title == "Sign Up" && (
          <input
            type="text"
            placeholder={"Name"}
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        )}
        <input
          type="email"
          placeholder={"Email"}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        {title == "Sign Up" && (
          <input
            type="number"
            maxLength={10}
            placeholder="Phone Number eg: 0552802788"
            onChange={(e) => setPhoneNumber(e.target.value)}
            value={phoneNumber}
          />
        )}
        <input
          type="password"
          placeholder={"Password"}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        {error !== null && (
          <div className="authError">
            <VscError size={20} />
            {error}
          </div>
        )}
        {isLoading ? (
          <HashLoader color={"#4678e4"} loading={isLoading} size={30} />
        ) : (
          <button>{title}</button>
        )}
      </form>
    </div>
  );
};

export default AuthAccount;
