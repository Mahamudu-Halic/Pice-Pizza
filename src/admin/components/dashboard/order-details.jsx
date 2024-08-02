import React, { useContext } from "react";
import { copyToClipboard } from "../../../constant";
import { FaRegCopy } from "react-icons/fa";
import { PiPhone } from "react-icons/pi";
import { CgClose } from "react-icons/cg";
import { ToastContainer } from "react-toast";
import DateTimeDisplay from "../date-time";
import { AdminContext } from "../../../services/admin/admin.context";

const OrderDetails = ({ clearOrderDetails, order }) => {
  const {changeOrderStatus} = useContext(AdminContext)

  const handleStatus = () => {

    const orderStatus = {
      orderId: order?._id,
      status: "completed"
    }
    changeOrderStatus(orderStatus)
    clearOrderDetails()
  }
  return (
    <div className="orderDetails" id="orderDetails">
      <ToastContainer delay={3000} position="top-center" />
      <CgClose size={20} onClick={clearOrderDetails} className="closeButton" />
      <h2>Order Details</h2>
      <div className="orderId">
        <p>Order ID #{order?._id}</p>
        <button onClick={() => copyToClipboard(order?._id)}>
          <FaRegCopy size={20} color="#94AACF" title="copy" />
        </button>
      </div>
      <div className={`orderStatus ${order?.status}`}>
        <p>{order?.status}</p>
      </div>

      {/* <div className="orderDetailList">
        {order?.orderList.map((item, index) => (
          <h3 key={item}>
            {index + 1}. {item}
          </h3>
        ))}
      </div> */}
      {/* <p className="time">{order?.createdAt} | Today</p> */}
      <DateTimeDisplay isoString={order?.createdAt} />

      {/* <p>Telephone</p>
      <a href={`tel:${order?.phoneNumber}`} className="phoneNumber">
        <div className={`iconContainer revenueBg`}>
          <PiPhone color={"#799AFF"} size={23} />
        </div>
        {order?.phoneNumber}
      </a> */}

      <section>
        {order?.status === "pending" && (
          <button className="completeBtn" onClick={handleStatus}>Complete</button>
        )}

        <p className="total-price">GHC {order?.totalPrice}</p>
      </section>
    </div>
  );
};

export default OrderDetails;
