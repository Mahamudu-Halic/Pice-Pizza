import quote from "../../assets/quote.png"
import customer from "../../assets/Customer.png"

const Testimonial = ({testimony = {}}) => {
    const {
        icon= quote,
        desc= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
        profile= customer,
      } = testimony;
  return (
    <div className="testimony card">
      <div className="quoteContainer">
        <img src={icon} alt="quote" width={40} />
      </div>

      <div className="testimonyDesc">
        <p>{desc}</p>
      </div>

      <div className="testimonyProfile">
        <img src={profile} alt="profile" width={40}/>
      </div>

    </div>
  );
};

export default Testimonial;
