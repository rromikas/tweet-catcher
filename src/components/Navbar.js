import React from "react";
import Logo from "components/Logo";
import MenuIcon from "icons/Menu.png";

const Navbar = ({ toggleMenu }) => {
  return (
    <div className="h-14 flex justify-between px-7 items-center">
      <Logo></Logo>
      <img onClick={toggleMenu} className="block md:hidden cursor-pointer" src={MenuIcon}></img>
    </div>
  );
};

export default Navbar;
