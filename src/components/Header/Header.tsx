import { Link } from "react-router-dom";

import Search from "../Search/index";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import React from "react";
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
