import { useEffect, useState } from "react";
import DateTimeDisplay from "../../admin/components/date-time";
import { CgClose } from "react-icons/cg";
import { FaRegCopy } from "react-icons/fa";
import { PiPhone } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import { MdDeliveryDining } from "react-icons/md";
import { copyToClipboard } from "../../constant";
import { ToastContainer } from "react-toast";

const ClientOrderItem = ({ clearOrderDetails, order }) => {
  const [status, setStatus] = useState(order?.status);

  useEffect(() => {
    setStatus(order?.status);
  }, [order]);

  return (
    <div className="orderDetails" id="orderDetails">
        <ToastContainer delay={3000} position="top-center" />
      <div className="flex justify-between items-center">
        <h2>Order Details</h2>
        <CgClose
          size={20}
          onClick={clearOrderDetails}
          className="closeButton"
        />
      </div>
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
                    {index + 1}. {item?.foodName}{" "}
                    <span>
                      <strong>x{item?.quantity}</strong>
                    </span>
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
      <DateTimeDisplay isoString={order?.createdAt} />

      <section>
        <p className="total-price">GHC {order?.totalPrice}</p>
      </section>
    </div>
  );
};

export default ClientOrderItem;
