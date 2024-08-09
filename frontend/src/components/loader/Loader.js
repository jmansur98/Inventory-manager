import React from "react";
import ReactDOM from "react-dom";
import Lottie from "lottie-react";
import animationData from "../../assets/Animation - 1723141484950.json"; // Asegúrate de que la ruta es correcta
import "./Loader.scss";

const Loader = () => {
  return ReactDOM.createPortal(
    <div className="wrapper">
      <div className="loader">
        <Lottie animationData={animationData} loop={true} />
      </div>
    </div>,
    document.getElementById("loader")
  );
};

export const SpinnerImg = () => {
  return (
    <div className="--center-all">
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

export default Loader;
