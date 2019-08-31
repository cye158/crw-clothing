import { cartActionTypes } from "./cart.types";

const INITIAL_STATE = { hiddenCart: false };

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART:
      return { ...state, hiddenCart: !state.hiddenCart };

    default:
      return state;
  }
};

export default cartReducer;
