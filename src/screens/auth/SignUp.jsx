import AuthAccount from "./components/AuthAccount";
import WelcomeDash from "./components/WelcomeDash";

const SignUp = () => {
  return (
    <div className={"authForm"}>
      <WelcomeDash />
      <AuthAccount title={"Sign Up"} url={"/"} />
    </div>
  );
};

export default SignUp;
