import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity = 1) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map(item => 
        item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };

  const removeFromCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct.quantity === 1) {
      setCart(cart.filter(item => item.id !== product.id));
    } else {
      setCart(cart.map(item => 
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
      ));
    }
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, getTotalPrice, getTotalQuantity }}>
      {children}
    </CartContext.Provider>
  );
};



// import React, { createContext, useState } from 'react';

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   const addToCart = (product) => {
//     const existingProduct = cart.find(item => item.id === product.id);
//     if (existingProduct) {
//       setCart(cart.map(item => 
//         item.id === product.id ? { ...item, quantity: existingProduct.quantity + product.quantity } : item
//       ));
//     } else {
//       setCart([...cart, { ...product, quantity: product.quantity }]);
//     }
//   };

//   const removeFromCart = (product) => {
//     const existingProduct = cart.find(item => item.id === product.id);
//     if (existingProduct.quantity === 1) {
//       setCart(cart.filter(item => item.id !== product.id));
//     } else {
//       setCart(cart.map(item => 
//         item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
//       ));
//     }
//   };

//   const getTotalPrice = () => {
//     return cart.reduce((total, item) => total + item.price * item.quantity, 0);
//   };

//   const getTotalQuantity = () => {
//     return cart.reduce((total, item) => total + item.quantity, 0);
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart, getTotalPrice, getTotalQuantity }}>
//       {children}
//     </CartContext.Provider>
//   );
// };
