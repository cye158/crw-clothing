import { cartActionTypes } from "./cart.types";

export const toggleCart = () => ({
  type: cartActionTypes.TOGGLE_CART
});

export const addItem = item => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item
});
