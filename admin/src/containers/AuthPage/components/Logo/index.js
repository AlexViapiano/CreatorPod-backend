import React from "react";
import logoImage from "../../../../assets/images/logo.png";
import Img from "./Img";

const Logo = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Img src={logoImage} alt="way-too-good-logo" />
    </div>
  );
};

export default Logo;
