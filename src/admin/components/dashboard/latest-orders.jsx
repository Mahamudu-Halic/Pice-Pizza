import React, { useRef, useState } from "react";
import Countdown from "react-countdown";
import { BiCopy } from "react-icons/bi";
import date from "date-and-time";
import { FaRegCopy } from "react-icons/fa";
import { ToastContainer, toast } from "react-toast";
import { copyToClipboard } from "../../../constant";

const LatestOrders = ({ order }) => {
  const [topOrder, setTopOrder] = useState(order?.orderList[0]);

  return (
    <>
      <>
        <div className="latestOrderInfo">
          <div>
            <div className="orderId">
              <p>Order ID #{order?.orderId}</p>
              <button onClick={() => copyToClipboard(order?.orderId)}>
                <FaRegCopy size={20} color="#94AACF" title="copy" />
              </button>
            </div>
            <h3>{topOrder}</h3>
            <p className="time">{order?.time} | Today</p>
          </div>

          <div>
            <div
              className={`orderStatus ${
                order?.status == "pending" ? "pending" : "completed"
              }`}
            >
              <p>{order?.status == "pending" ? "Pending" : "Completed"}</p>
            </div>
            <h3>Ghs {order?.total}</h3>
          </div>
        </div>

        <select name="" id="" onClick={(e) => setTopOrder(e.target.value)}>
          {order?.orderList.map((item, i) => (
            <option value={item} key={item + i}>
              {item}
            </option>
          ))}
        </select>
      </>
    </>
  );
};

export default LatestOrders;
