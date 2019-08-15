import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/crw.svg";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <Link className="logo-contianer" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default Header;
