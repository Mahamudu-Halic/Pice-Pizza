import DateTimeDisplay from "../date-time";

const LatestOrders = ({ order }) => {
  return (
    <>
      <div>
        <div className="orderId">
          <p>Order ID #{order?._id}</p>
        </div>
        <p className="order-email">{order?.email}</p>
        <DateTimeDisplay isoString={order?.createdAt} />
      </div>

      <div>
        <div
          className={`orderStatus ${
            order?.status}`}
        >
          <p>{order?.status}</p>
        </div>
        <p className="total-price">GHC {order?.totalPrice}</p>
      </div>
    </>
  );
};

export default LatestOrders;
