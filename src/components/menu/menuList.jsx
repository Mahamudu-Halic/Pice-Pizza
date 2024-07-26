import { useState } from "react";
import Rectangle23 from "../../assets/Rectangle 23.png";
import MenuModal from "../menu.modal";

const MenuList = ({ menu }) => {
  const { image, title, desc, price } = menu;

  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {showModal && (
        <div className="menu-modal-container">
          <div className="modal-overlay" onClick={() => setShowModal(false)} />
          <MenuModal menu={menu} setShowModal={setShowModal} />
        </div>
      )}
      <div className="menuListItem" onClick={() => setShowModal(true)}>
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
    </>
  );
};

export default MenuList;
