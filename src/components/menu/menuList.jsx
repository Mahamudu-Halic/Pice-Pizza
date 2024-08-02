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
      <div className="menuListItem" onClick={() => setShowModal(true)}>
        <div className="menuItemImage">
          <img src={url} alt={name} width={150} />
        </div>

        <div className="menuItemContent">
          <div className="topMenuItemContent">
            <p className="menuItemTitle">{name} ({size})</p>
            <p className="menuItemPrice red">GHC {price}</p>
          </div>
          <hr />
          <div className="bottomMenuItemContent">
            <p className="menuItemDesc">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuList;
