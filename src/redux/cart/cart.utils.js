export const addItemToCart = (cartItems, itemToAdd) => {
  const itemExistsInCart = cartItems.find(item => item.id === itemToAdd.id);

  if (itemExistsInCart) {
    return cartItems.map(item =>
      item.id === itemToAdd.id ? { ...item, quantity: ++item.quantity } : item
    );
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const minusItemToCart = (cartItems, cartItemToMinus) => {
  const itemExistsInCart = cartItems.find(
    item => item.id === cartItemToMinus.id
  );

  if (itemExistsInCart.quantity === 1) {
    return cartItems;
  }

  return cartItems.map(cartItem =>
    cartItem.id === cartItemToMinus.id
      ? { ...cartItem, quantity: --cartItem.quantity }
      : cartItem
  );
};
