import React from "react";
import CustomButton from "../custom-button/custom-button.component";

import "./cart-dropdown.scss";

const Cart = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <CustomButton>CHECKOUT</CustomButton>
    </div>
  );
};

export default Cart;
