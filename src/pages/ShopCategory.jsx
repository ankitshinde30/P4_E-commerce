import React,{useContext} from "react";
import './CSS/ShopCategory.css';
import { ShopContext } from "../context/ShopContext";
import dropdown_icon from "../components/Assets/dropdown_icon.png";
import Item from "../components/Item/Item";


  
const ShopCategory=(props)=>{
  const {all_products}=useContext(ShopContext);
  return(
    <div className="shop-category">
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexsort">
        <p>
          <span>Showing 1-12</span>out of 36 products
        </p>
        <div className="shopcategory-sort">
          sort by <img src={dropdown_icon} alt="" />        
          </div>
      </div>
      <div className="shopcategory-products">
        {all_products.map((item,i)=>{
          if(item.category===props.category){
            return <Item key={i} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} />
          }
          else{
            return null
        }}
        )};
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  );
}

  export default ShopCategory;