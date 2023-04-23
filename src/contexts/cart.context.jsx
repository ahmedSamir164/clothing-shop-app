import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToadd) => {
  const existingcartItem = cartItems.find(
    (item) => item.id === productToadd.id
  );
  if (existingcartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToadd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToadd, quantity: 1 }];
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemsTocart: () => {},
  cartCount: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);
  const addItemsTocart = (productToadd) => {
    setCartItems(addCartItem(cartItems, productToadd));
  };
  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemsTocart,
    cartCount,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
