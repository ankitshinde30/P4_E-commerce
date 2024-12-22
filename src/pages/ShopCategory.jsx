import React from "react";


function ShopCategory({ category }) {
    return (
      <div>
        <h2>Shop {category}</h2>
        {/* Your shop category content here */}
        <p>This is the {category} category page</p>
      </div>
    );
  }
  
  export default ShopCategory;