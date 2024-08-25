import { useState } from "react";
import MenuModal from "../menu.modal";

const MenuList = ({ menu }) => {
  const { url, name, description, price, size } = menu;

  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {showModal && (
        <div className="menu-modal-container">
          <div className="modal-overlay" onClick={() => setShowModal(false)} />
          <MenuModal menu={menu} setShowModal={setShowModal} />
        </div>
      )}
      <div className="menuListItem" >
        <div className="menuItemImage">
          <img src={url} alt={name} width={150} />
        </div>

        {/* <div className="menuItemContent"> */}
          {/* <div className="topMenuItemContent"> */}
            <p className="menuItemTitle">{name} ({size})</p>
            <p className="menuItemDesc">{description}</p>
          {/* </div> */}
            <p className="menuItemPrice red">GHC {price}</p>
          {/* <div className="bottomMenuItemContent"> */}
          {/* </div> */}
        {/* </div> */}
        <button onClick={() => setShowModal(true)} className="add-to-cart-btn">Add to cart</button>
      </div>
    </>
  );
};

export default MenuList;
