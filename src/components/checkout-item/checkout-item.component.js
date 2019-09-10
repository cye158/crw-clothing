import React from "react";
import { connect } from "react-redux";

import { removeItem, addItem, minusItem } from "../../redux/cart/cart.actions";

import "./checkout-item.scss";

const CheckOutItem = ({ cartItem, deleteItem, increaseItem, decreaseItem }) => {
  const { imageUrl, name, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => decreaseItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => increaseItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => deleteItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  deleteItem: item => dispatch(removeItem(item)),
  increaseItem: item => dispatch(addItem(item)),
  decreaseItem: item => dispatch(minusItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckOutItem);
