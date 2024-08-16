import React, { useContext, useEffect, useState } from "react";
import { copyToClipboard } from "../../../constant";
import { FaRegCopy } from "react-icons/fa";
import { PiPhone } from "react-icons/pi";
import { CgClose } from "react-icons/cg";
import { ToastContainer } from "react-toast";
import DateTimeDisplay from "../date-time";
import { AdminContext } from "../../../services/admin/admin.context";
import { MdDeliveryDining } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { ClipLoader } from "react-spinners";

const OrderDetails = ({ clearOrderDetails, order }) => {
  const { changeOrderStatus, isLoading } = useContext(AdminContext);
  const [status, setStatus] = useState(order?.status)

  const handleStatus = () => {
    const orderStatus = {
      orderId: order?._id,
      status: "completed",
    };
    changeOrderStatus(orderStatus, setStatus);
  };

  useEffect(() => {
    setStatus(order?.status)
  }, [order])

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

      <div className="flex flex-col details">
        <a href={`tel:${order?.phoneNumber}`} className="phoneNumber">
          <div className={`iconContainer revenueBg`}>
            <PiPhone color={"#799AFF"} size={25} />
          </div>
          {order?.phoneNumber}
        </a>
        <div className="flex location">
          <CiLocationOn size={25} />
          <p>{order?.location}</p>
        </div>
        <div className="flex mode">
          <MdDeliveryDining size={25} />
          <p>{order?.mode}</p>
        </div>
      </div>

      <div className="order-container">
        <h3>Order</h3>
        <div className="order flex flex-col">
          {order?.orderItems.map((item, index) => {
            return (
              <div key={item?.foodId} className="flex flex-col order-item">
                <div className="food-info flex justify-between">
                  <p>
                  {index + 1}. food name {item?.foodName} <span>x{item?.quantity}</span>
                  </p>
                  <p>GHC {item?.unitPrice}</p>
                </div>

                {item?.topping && (
                  <div>
                    <h5>Extra Toppings</h5>

                    {item?.topping.map((top) => {
                      return (
                        <div key={top?._id}>
                          <p>{top?.inGredientName}</p>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className={`orderStatus ${status}`}>
        <p>{status}</p>
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

      <section>
        {status === "pending" && (
          <button className="completeBtn" onClick={handleStatus}>
            {isLoading ? <ClipLoader color="white" size={20}/> : "Complete"}
          </button>
        )}
        {/* {order?.status === "pending" && (
          <button className="completeBtn" onClick={handleStatus}>
            {isLoading ? <ClipLoader color="white" size={20}/> : "Complete"}
          </button>
        )} */}

        {/* {
          !isLoading && <ClipLoader color="black" size={20}/>
        } */}

        <p className="total-price">GHC {order?.totalPrice}</p>
      </section>
    </div>
  );
};

export default OrderDetails;
