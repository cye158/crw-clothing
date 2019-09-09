import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckOutItem from "../../components/checkout-item/checkout-item.component";

import {
  selectCartItems,
  selectCartTotalPrice
} from "../../redux/cart/cart.selectors";

import "./checkout.scss";

const CheckoutPage = ({ cartItems, cartTotalPrice }) => {
  return (
    <div className="checkout">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => (
        <CheckOutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>TOTAL: ${cartTotalPrice}</span>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotalPrice: selectCartTotalPrice
});

export default connect(mapStateToProps)(CheckoutPage);
