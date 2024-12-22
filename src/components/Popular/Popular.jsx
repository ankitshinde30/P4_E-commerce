import React from "react";
import "./Popular.css";
import data_products from "../Assets/data";
import { data } from "react-router-dom";
import Item from "../Item/Item";


const Popular = () => { 
    return (
        <div className="popular">
            <h1>POPULAR IN WOMEN </h1>
            <hr />
            <div className="popular-items">
                {/* {data_products.map((item) => {
                    return (
                        <div className="popular-item" key={item.id}>
                            <img src={item.image} alt="item" />
                            <p>{item.name}</p>
                            <div className="popular-item-prices">
                                <div className="popular-item-price-new">
                                    {item.new_price}
                                </div>
                                <div className="popular-item-price-old">
                                    {item.old_price}
                                </div>
                            </div>
                        </div>
                    );
                })} */
                
                
                data_products.map((item,i) => {
                    return <Item key={i} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} />
                })
                }
        </div>
        </div>
    );
}

export default Popular; 