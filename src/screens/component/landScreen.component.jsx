import React from "react";
import Overlay from "../../modules/overlay.module";
import Navbar from "../../components/navbar";
import MainHeading from "../../components/mainHeading";
import Heading from "../../components/heading";

const LandScreen = (props) => {
  const {
    image = "",
    mainHeading = "",
    heading = "",
    getStarted = false,
    fontFamily = "leckerliOne",
    shoppingCart = false,
  } = props;
  return (
    <div className="landScreenHeader">
      <Overlay />
      <div className="bgImage">
        <img src={image} alt={`${image}`} />
      </div>
      <Navbar style={"white"} shoppingCart={shoppingCart} />
      <div className="landScreenContentContainer">
        <div className="menuHeaderContent">
          <MainHeading title={mainHeading} />

          <Heading title={heading} fontFamily={fontFamily} />
        </div>
      </div>

      {getStarted && (
        <p className="getStarted leckerliOne white">Get Creative</p>
      )}
    </div>
  );
};

export default LandScreen;
