import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
  const { all_products, cartItems, removeFromCart, getTotalCartAmount } =
    useContext(ShopContext);

  // Calculate total price using the getTotalCartAmount method
  const totalPrice = getTotalCartAmount().toFixed(2);

  return (
    <div className="cartitems">
      {/* Cart Header */}
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {/* Render Cart Items */}
      {all_products.map((product) => {
        if (cartItems[product.id] > 0) {
          return (
            <div key={product.id}>
              <div className="cartitems-format cartitems-format-main">
                <img
                  src={product.image}
                  alt=""
                  className="carticon-product-icon"
                />
                <p>{product.name}</p>
                <p>${product.new_price.toFixed(2)}</p>
                <button className="cartitems-quantity">
                  {cartItems[product.id]}
                </button>
                <p>${(product.new_price * cartItems[product.id]).toFixed(2)}</p>
                <img
                  className="cartitems-remove-icon"
                  src={remove_icon}
                  alt="remove item"
                  onClick={() => removeFromCart(product.id)}
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      {/* Cart Summary */}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${totalPrice}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping</p>
              <p>Free Shipping</p>
            </div>
          </div>
          <hr />
          <div className="cartitems-total-item">
            <p>Total</p>
            <p>${totalPrice}</p>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        {/* Promo Code Section */}
        <div className="cartitems-promocode">
          <h1>Have a Promo Code?</h1>
          <div className="cartitems-promobox">
            <input type="text" placeholder="Enter your code" />
            <button>APPLY</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
