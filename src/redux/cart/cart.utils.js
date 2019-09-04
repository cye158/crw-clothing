export const addItemToCart = (cartItems, itemToAdd) => {
  const itemExistsInCart = cartItems.find(item => item.id === itemToAdd.id);

  if (itemExistsInCart) {
    return cartItems.map(item =>
      item.id === itemToAdd.id ? { ...item, quantity: ++item.quantity } : item
    );
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};
