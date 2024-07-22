import "../styles/landingpage.css";
import Homepage from "../components/landing/homepage";
import CardList from "../components/landing/cardList";
import AboutUs from "../components/landing/aboutUs";
import TestimonialList from "../components/landing/testimonialList";
const HomeScreen = () => {
  return (
    <div className="homeScreen">
      <Homepage />
      <CardList />
      <AboutUs />
      <TestimonialList />
    </div>
  );
};

export default HomeScreen;
