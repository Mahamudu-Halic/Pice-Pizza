import React from "react";
import CountUp from "react-countup/build/CountUp";

const StatCardComponent = ({ Icon, title, total, bg, color }) => {
  return (
    <div className="statCard">
      <div className={`iconContainer ${bg}`}>
        <Icon color={color} size={20} />
      </div>

      <div className="containerItem">
        <p className="containerItemTitle">{title}</p>
        <h3 className="containerItemTotal">{total}</h3>
        <CountUp duration={100} end={total} />
      </div>
    </div>
  );
};

export default StatCardComponent;
