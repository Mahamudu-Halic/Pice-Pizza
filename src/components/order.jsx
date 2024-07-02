import pizza from "../assets/pizza.png";
const Order = ({ order = {} }) => {
  const {
    name = "My Pizza",
    desc = "A twist on the classic, featuring a base of fluffy scrambled eggs, topped with fresh mozzarella cheese, cherry tomatoes, and a drizzle of balsamic glaze. (Vegetarian)",
    price = "$15",
    image = pizza,
  } = order;
  return (
    <div className="order">
      <div className="orderInfoContainer">
        <div className="orderImage">
          <img src={image} alt={name} />
        </div>
        <div className="orderInfoContent">
          <h3>{name}</h3>
          <hr />
          <p>{desc}</p>
        </div>
      </div>

      <div className="orderDetailsContainer">
        <h3>Product Details</h3>
        <div className="orderDetails">
          <div className="row1">
            <p>Product</p>
            <p>$150</p>
          </div>
          <div className="row2">
            <p>Service Fee</p>
            <p>$12</p>
          </div>
          <div className="row3">
            <p>User Discount</p>
            <p>$0.50</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="total">
        <p>Total</p>
        <p>$170</p>
      </div>
    </div>
  );
};

export default Order;
