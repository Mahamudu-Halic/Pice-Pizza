import StatCardComponent from "./stat-card";
import { FaBoxOpen } from "react-icons/fa";
import { GiCardboardBox } from "react-icons/gi";
import { BsBoxSeamFill, BsFillBoxFill } from "react-icons/bs";
import { useContext } from "react";
import { AdminContext } from "../../../services/admin/admin.context";

const StatCardList = () => {
  const { orders } = useContext(AdminContext);

  return (
    <div className="statCardList">
      <StatCardComponent
        Icon={BsFillBoxFill}
        title={"Total Orders"}
        color={"#39BAAF"}
        bg={"ordersBg"}
        total={orders.length}
      />
      <StatCardComponent
        Icon={GiCardboardBox}
        title={"Total Delivered"}
        color={"#E3B535"}
        bg={"deliveredBg"}
        total={56}
      />
      <StatCardComponent
        Icon={BsBoxSeamFill}
        title={"Total Revenue"}
        color={"#799AFF"}
        bg={"revenueBg"}
        total={75}
      />
      <StatCardComponent
        Icon={FaBoxOpen}
        title={"Total Canceled"}
        color={"#DF4B4B"}
        bg={"canceledBg"}
        total={15}
      />
    </div>
  );
};

export default StatCardList;
