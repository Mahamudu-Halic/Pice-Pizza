const AboutUs = () => {
  return (
    <div className="about">
      <div className="imageGridContainer">images here...</div>
      <div className="aboutContentContainer">
        <div className="aboutTitleContainer">
          <h3 className="aboutTitle red leckerliOne">About Us</h3>
        </div>


        <div className="aboutContent">
        <h2 className="aboutSubtitle">
          WELCOME TO <span className="red">PICE PIZZA</span>
        </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam
            etiam erat velit scelerisque in.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore{" "}
          </p>
        </div>

        <button className="redButton">READ MORE</button>
      </div>
    </div>
  );
};

export default AboutUs;
