import React from "react";
import { Link } from "react-router-dom";

import logoSwg from "../../../assets/img/pizza-logo.svg";

const Logo: React.FC = () => {
  return (
    <Link to="/">
      <div className="header__logo">
        <img width="38" src={logoSwg} alt="Pizza logo" />
        <div>
          <h1>React Pizza</h1>
          <p>самая вкусная пицца во вселенной</p>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
