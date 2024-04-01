import React from "react";
import myImage from "./pic.png";
import "./PictureCom.css";

function PictureCom() {
  return (
    <div className="PictureCom">
      <img src={myImage} alt="description" />
    </div>
  );
}

export default PictureCom;
