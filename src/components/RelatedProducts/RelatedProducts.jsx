import React from 'react'
import './RelatedProducts.css'
import data_products from '../Assets/data'
import Item from '../Item/Item'



export const RelatedProducts = () => {
  return (
    <div className='relatedproducts' >
        <h1>Related Products</h1>
        <hr />
        <div className="relatedproducts-items">
            {data_products.map((item,i) => {
                 return <Item key={i} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </div>  
  )
}

export default RelatedProducts;