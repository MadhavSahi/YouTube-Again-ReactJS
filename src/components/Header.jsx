import React from "react";
import hamburgerMenu from "../assets/hamburger-menu-icon.png";
import youtubeLogo from "../assets/YouTube_Logo_2017.svg.png";
// import './index.css'

const Header = () => {
  return (
    <>
      <div className="flex flex-row bg-red-600">
        <img alt="hamburger-menu" src={hamburgerMenu} height={60} width={60} />
        <img alt="youtube-logo" src={youtubeLogo} height={50} width={150} />
      </div>
    </>
  );
};

export default Header;
