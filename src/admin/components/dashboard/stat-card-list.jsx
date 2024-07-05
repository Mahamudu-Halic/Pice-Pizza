import StatCardComponent from "./stat-card";
import { FaBoxOpen } from "react-icons/fa";
import { GiCardboardBox, GiCardboardBoxClosed } from "react-icons/gi";
import { BsBoxSeamFill, BsFillBoxFill } from "react-icons/bs";

const StatCardList = () => {
  return (
    <div className="statCardList">
      <StatCardComponent
        Icon={BsFillBoxFill}
        title={"Total Orders"}
        color={"#39BAAF"}
        bg={"ordersBg"}
        total={1750}
      />
      <StatCardComponent
        Icon={GiCardboardBox}
        title={"Total Delivered"}
        color={"#E3B535"}
        bg={"deliveredBg"}
        total={567}
      />
      <StatCardComponent
        Icon={BsBoxSeamFill}
        title={"Total Revenue"}
        color={"#799AFF"}
        bg={"revenueBg"}
        total={750}
      />
      <StatCardComponent
        Icon={FaBoxOpen}
        title={"Total Canceled"}
        color={"#DF4B4B"}
        bg={"canceledBg"}
        total={150}
      />
    </div>
  );
};

export default StatCardList;
