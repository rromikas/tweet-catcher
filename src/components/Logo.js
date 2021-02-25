import LogoImage from "icons/Logo.png";
import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center">
      <img width={34} src={LogoImage} className="mr-3"></img>
      <div className="font-bold text-white">Tweet Catcher</div>
    </div>
  );
};

export default Logo;
