import React, { createContext, useContext, useState } from 'react';

// Create the CartContext
const CartContext = createContext();

// Provider component for CartContext
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [confirmedOrders, setConfirmedOrders] = useState([]); // Added for confirmed orders

  // Add item to cart
  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  // Clear the cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Confirm the order
  const confirmOrder = () => {
    setConfirmedOrders(cartItems); // Store the confirmed orders
    clearCart(); // Clear the cart after confirming the order
  };

  // Calculate total, discount, and final amount
  const calculateTotal = () => {
    const total = cartItems.reduce((sum, item) => sum + parseFloat(item.price.replace('R', '')), 0);
    let discount = 0;

    // Apply discount based on the number of items
    if (cartItems.length === 2) {
      discount = total * 0.1; // 10% discount for 2 items
    } else if (cartItems.length > 2) {
      discount = total * 0.15; // 15% discount for more than 2 items
    }

    const finalTotal = total - discount;
    return {
      total: `R${total.toFixed(2)}`,
      discount: `R${discount.toFixed(2)}`,
      finalTotal: `R${finalTotal.toFixed(2)}`
    };
  };

  // Value provided to components
  return (
    <CartContext.Provider value={{ cartItems, addToCart, clearCart, confirmOrder, confirmedOrders, calculateTotal }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the CartContext
export const useCart = () => {
  return useContext(CartContext);
};
