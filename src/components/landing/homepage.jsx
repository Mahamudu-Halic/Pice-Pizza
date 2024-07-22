import heroImage from "../../assets/heroImage.png";
import bgImage from "../../assets/bgImage.png";
import Overlay from "../../modules/overlay.module";
import Navbar from "../navbar";
const Homepage = () => {
  return (
    <>
      <div className="homePage">
        {/* <Navbar absolute="absolute" style="navColor" bg="blueBg" /> */}

        <div className="homePageContainer">
          <Overlay />
          <div className="bgImage">
            <img src={bgImage} alt="bgImage" />
          </div>

          <div className="homePageContentContainer">
            <div className="homePageContent">
              <h1>
                ENJOY OUR DELICIOUS MEALS
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Aliquam etiam erat velit scelerisque in.
              </p>
            </div>

            <button className="redButton">ORDER NOW</button>
          </div>
        </div>
        {/* <div className="heroContent">
          <div className="heroContentImage">
            <img src={heroImage} alt="" />
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Homepage;
