import React from "react";
import all_products from "../Components/Assets/all_product.js";

export const ShopContext = React.createContext(null);

// Helper function to initialize the cart
const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_products.length; index++) {
    cart[all_products[index].id] = 0; // Initialize all product IDs with a quantity of 0
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = React.useState(getDefaultCart());

  // Add an item to the cart
  const addToCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev, [itemId]: prev[itemId] + 1 };
      console.log(updatedCart); // Debugging
      return updatedCart;
    });
  };

  // Remove an item from the cart
  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev, [itemId]: prev[itemId] - 1 };
      return updatedCart;
    });
  };

  // Calculate the total cart amount
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        const itemInfo = all_products.find(
          (product) => product.id === parseInt(itemId)
        );
        totalAmount += cartItems[itemId] * itemInfo.new_price;
      }
    }
    return totalAmount;
  };

  const getTotalcartItems = () => { 
    let totalItems = 0; 
    for (const item in cartItems) { 
      if (cartItems[item] > 0) { 
        totalItems += cartItems[item]; 
      } 
    } 
    return totalItems; 
  }

  // Provide context values
  const contextValue = {
    all_products,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalcartItems,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
