import React from "react";
import all_products from "../Components/Assets/all_product.js";


export const ShopContext = React.createContext(null);

const getdefaultCart = () => {  
    let cart ={};
    for (let index = 0; index < all_products.length+1; index++) {
        cart[index] = 0;
        }
    return cart;
    };


const ShopContextProvider = (props) => {
    
    const [cartItems, setCartItems] = React.useState(getdefaultCart());

    const addToCart = (itemId) => { 
        setCartItems((prev) => {
            const updatedCart = {...prev, [itemId]: prev[itemId]+1};
            console.log(updatedCart);
            return updatedCart;
        });
    };
    
    const removeFromCart = (itemId) => {    
        setCartItems((prev) => {
            return {...prev, [itemId]: prev[itemId]-1};
        });
    };

    const contextValue ={all_products, cartItems, addToCart, removeFromCart};


    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );

};

export default ShopContextProvider;
