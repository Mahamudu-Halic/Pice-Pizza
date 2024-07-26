import rectangle9 from "../../assets/Rectangle 9.png";
import rectangle10 from "../../assets/Rectangle 10.png";
import rectangle11 from "../../assets/Rectangle 11.png";
import rectangle12 from "../../assets/Rectangle 12.png";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate()
  return (
    <div className="aboutUs">
      <div className="imageGridContainer">
        <div className="row1">
          <div className="aboutUsImage small">
            <img src={rectangle9} alt="" />
          </div>
          <div className="aboutUsImage large">
            <img src={rectangle10} alt="" />
          </div>
        </div>
        <div className="row2">
          <div className="aboutUsImage medium">
            <img src={rectangle11} alt="" />
          </div>
          <div className="aboutUsImage small">
            <img src={rectangle12} alt="" />
          </div>
        </div>
      </div>
      <div className="aboutUsContentContainer">
        <div className="aboutUsTitleContainer">
          <h3 className="aboutUsTitle red leckerliOne">About Us</h3>
          <hr />
        </div>

        <div className="aboutUsContent">
          <h2 className="aboutUsSubtitle">
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
        <button className="redButton" onClick={() => navigate("/about")}>READ MORE</button>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;
