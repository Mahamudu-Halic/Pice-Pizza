import log from "../../../assets/log.png";

const WelcomeDash = () => {
  return (
    <div className="welcomeDash">
      <h2 className={"flexipay"}>PicePizza</h2>
      <div className="image">
        <img src={log} alt="an image here" />
      </div>

      <div className="welcomeText">
        <h2>Welcome!</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum neque
          repudiandae voluptatibus atque quisquam! Sit, aliquam ipsa cumque
          blanditiis non illo, autem voluptatum quos doloremque quae asperiores
          ut id veniam!
        </p>
      </div>
    </div>
  );
};

export default WelcomeDash;
