import React from "react";

const Overlay = ({ showModal }) => {
  return <div className={"accountOverlay"} onClick={showModal}></div>;
};

export default Overlay;
