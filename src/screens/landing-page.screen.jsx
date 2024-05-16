import "../styles/landingpage.css";
import Homepage from "../components/landing/homepage";
import CardList from "../components/landing/cardList";
import AboutUs from "../components/landing/aboutUs";
import TestimonialList from "../components/landing/testimonialList";
const LandingPage = () => {
  return (
    <div className="landingPage">
      <Homepage />
      <CardList />
      <AboutUs />
      <TestimonialList />
    </div>
  );
};

export default LandingPage;
