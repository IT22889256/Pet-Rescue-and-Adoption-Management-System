import React from "react";
import loaderImg from "../../../image/ResQ_logo.png";
import ReactDOM from "react-dom";

const Loader = () => {
  return ReactDOM.createPortal(
    <div className="fixed w-56 h-auto bg-black z-10">
      <div className="fixed left-1/2 top-1/2 z-50">
        <img src={loaderImg} alt="Loading..." />
      </div>
    </div>,
    document.getElementById("loader")
  );
};

export const SpinnerImg = () => {
  return (
    <div className="--center-all">
      <img src={loaderImg} alt="Loading..." />
    </div>
  );
};

export default Loader;
