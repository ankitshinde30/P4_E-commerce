 import React from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../context/ShopContext';


const ProductDisplay = (props) => {
    const {product} = props;

    const {addToCart} = React.useContext(ShopContext);


  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
           <div className="productdisplay-img-list">
                <img src={product.image} alt="product" />
                <img src={product.image} alt="product" />
                <img src={product.image} alt="product" />
                <img src={product.image} alt="product" />
           </div>
              <div className="productdisplay-img">
                 <img className='productdisplay-main-img' src={product.image} alt="product" />
            </div>
            
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={star_icon} alt="star" />
                <img src={star_icon} alt="star" />
                <img src={star_icon} alt="star" />
                <img src={star_icon} alt="star" />
                <img src={star_dull_icon} alt="star" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
              <div className="productdisplay-right-price-old">
                ${product.old_price}
              </div>
              <div className="productdisplay-right-price-new">
                ${product.new_price}
                </div>
            </div>
            <div className="productdisplay-right-description">
              A lightweight, durable, and stylish solution for your daily commute. 
              The perfect size for a laptop, tablet, and all your daily essentials.
            </div>
            <div className="productdisplay-right-size">
              <h1>Select size</h1>
              <div className="productdisplay-right-size-list">
                <div className="productdisplay-right-size-item">S</div>
                <div className="productdisplay-right-size-item">M</div>
                <div className="productdisplay-right-size-item">L</div>
                <div className="productdisplay-right-size-item">XL</div>
                <div className="productdisplay-right-size-item">XLL</div>
                </div>
            </div>
            <button onClick={()=>addToCart(product.id)} >ADD TO CART</button>
            <p className='productdisplay-right-category'> <span>Category :</span> Women, T-shirt, Croptop</p>
            <p className='productdisplay-right-category'> <span>Tags :</span> Modern, Latest</p>
        </div>
    </div>
  );
}

export default ProductDisplay;