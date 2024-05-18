import Rectangle23 from "../../assets/Rectangle 23.png";

const MenuList = ({ menu = {} }) => {
  const {
    image = Rectangle23,
    title = "Chicken Burger",
    desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
    price = 160,
  } = menu;
  return (
    <div className="menuListItem">
      <div className="menuItemImage">
        <img src={image} alt={title} width={150} />
      </div>

      <div className="menuItemContent">
        <div className="topMenuItemContent">
          <p className="menuItemTitle">{title}</p>
          <p className="menuItemPrice red">${price}</p>
        </div>
        <hr />
        <div className="bottomMenuItemContent">
          <p className="menuItemDesc">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default MenuList;
