import { cartActionTypes } from "./cart.types";
import { addItemToCart } from "./cart.utils";

const INITIAL_STATE = { hiddenCart: false, cartItems: [] };

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART:
      return { ...state, hiddenCart: !state.hiddenCart };

    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };

    case cartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== action.payload.id
        )
      };

    default:
      return state;
  }
};

export default cartReducer;
