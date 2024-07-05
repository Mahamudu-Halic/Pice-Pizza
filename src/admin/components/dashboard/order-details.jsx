import React from "react";
import { copyToClipboard } from "../../../constant";
import { FaRegCopy } from "react-icons/fa";
import { PiPhone } from "react-icons/pi";
import { CgClose } from "react-icons/cg";

const OrderDetails = ({ clearOrderDetails, order }) => {
  return (
    <div className="orderDetails" id="orderDetails">
      <CgClose size={20} onClick={clearOrderDetails} className="closeButton" />
      <h2>Order Details</h2>
      <div className="orderId">
        <p>Order ID #{order?.orderId}</p>
        <button onClick={() => copyToClipboard(order?.orderId)}>
          <FaRegCopy size={20} color="#94AACF" title="copy" />
        </button>
      </div>
      <div
        className={`orderStatus ${
          order?.status == "pending" ? "pending" : "completed"
        }`}
      >
        <p>{order?.status == "pending" ? "Pending" : "Completed"}</p>
      </div>

      <div className="orderDetailList">
        {order?.orderList.map((item, index) => (
          <h3 key={item}>
            {index + 1}. {item}
          </h3>
        ))}
      </div>
      <p className="time">{order?.time} | Today</p>

      <p>Telephone</p>
      <a href={`tel:${order?.phoneNumber}`} className="phoneNumber">
        <div className={`iconContainer revenueBg`}>
          <PiPhone color={"#799AFF"} size={23} />
        </div>
        {order?.phoneNumber}
      </a>

      <section>
        {order?.status === "pending" && (
          <button className="completeBtn">Complete</button>
        )}

        <h3>Ghs {order?.total}</h3>
      </section>
    </div>
  );
};

export default OrderDetails;
