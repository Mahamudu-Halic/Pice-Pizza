import Testimonial from "./testimonial";
import { TestimonialListItem } from "../../constant";
import Heading from "../heading";

const TestimonialList = () => {
  return (
    <div className="testimonyList">
      <Heading title={"Testimonial"} />

      <h3 className="testimonialSubtitle">What our clients say</h3>

      <div className="cardList">
        {TestimonialListItem.map((item, i) => (
          <Testimonial testimony={item} key={i} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialList;
