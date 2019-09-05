import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { auth } from "../../firebase/firebase.utils";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { ReactComponent as Logo } from "../../assets/crw.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";

import "./header.scss";

const Header = ({ currentUser, hiddenCart }) => {
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
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            LOG OUT
          </div>
        ) : (
          <Link className="option" to="/login">
            LOG IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hiddenCart && <CartDropDown />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hiddenCart: selectCartHidden
});

export default connect(mapStateToProps)(Header);
