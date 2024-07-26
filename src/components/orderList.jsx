import { Fragment, useContext, useState } from "react";
import Order from "./order";
import { OrderContext } from "../services/order/order.context";

const OrderList = ({ total, orders }) => {
  return (
    <div className="orderList">
      <div className="orderListItems">
        {orders.map((order) => {
          return (
            <Fragment key={order?.foodId}>
              <Order order={order} />
            </Fragment>
          );
        })}
      </div>
      <hr />
      <div className="total">
        <p>Total</p>
        <p>Ghc{total}</p>
      </div>
    </div>
  );
};

export default OrderList;
