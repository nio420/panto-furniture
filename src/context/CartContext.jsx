import React, { createContext, useState } from 'react';
import Swal from 'sweetalert2';

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    if (cartItems.some(item => item.id === product.id)) {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'This product is already in your cart!',
        confirmButtonColor: '#3085d6',
      });
    } else {
      setCartItems(prevItems => [...prevItems, product]);
      Swal.fire({
        icon: 'success',
        title: 'Added!',
        text: 'Product has been added to your cart.',
        confirmButtonColor: '#3085d6',
      });
    }
  };

  const removeFromCart = (id) => {
  setCartItems(prev => prev.filter(item => item.id !== id));
};

  const cartCount = cartItems.length;

  return (
    <CartContext.Provider value={{ cartItems, cartCount, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
