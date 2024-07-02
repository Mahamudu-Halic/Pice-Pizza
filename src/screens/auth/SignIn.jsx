import "./auth.css";
import AuthAccount from "./components/AuthAccount";
import WelcomeDash from "./components/WelcomeDash";

const SignIn = () => {
  return (
    <div className="authForm">
      <WelcomeDash />
      <AuthAccount title={"Sign In"} url={"/sign-up"} />
    </div>
  );
};

export default SignIn;
