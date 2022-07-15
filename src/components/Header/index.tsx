import React from "react";

import Search from "../Search/index";
import Logo from "./HeaderComponents/Logo";
import HeaderCart from "./HeaderComponents/HeaderCart";

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="container">
        <Logo />
        <Search />
        <HeaderCart />
      </div>
    </div>
  );
};

export default Header;
