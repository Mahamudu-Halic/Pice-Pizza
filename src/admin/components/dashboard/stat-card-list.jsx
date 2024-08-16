import StatCardComponent from "./stat-card";
import { FaBoxOpen } from "react-icons/fa";
import { GiCardboardBox } from "react-icons/gi";
import { BsBoxSeamFill, BsFillBoxFill } from "react-icons/bs";
import { useContext, useEffect, useState } from "react";
import { AdminContext } from "../../../services/admin/admin.context";

const StatCardList = () => {
  const { orders } = useContext(AdminContext);

  const totalDelivered = orders.filter((item) => item?.status == "completed");

  const totalCanceled = orders.filter((item) => item?.status == "canceled");

  let totalRevenue = 0;
  orders.map((item) => {
    if (item?.status === "completed") {
      totalRevenue += Number(item?.totalPrice);
    }
  });

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
        total={totalDelivered.length}
      />
      <StatCardComponent
        Icon={BsBoxSeamFill}
        title={"Total Revenue"}
        color={"#799AFF"}
        bg={"revenueBg"}
        total={totalRevenue}
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
