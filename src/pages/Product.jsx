import React, {useContext} from "react";


const Product = () => {
    const {all_products} = useContext(ShopContext);
    const {productId} = useParams();
    const product = all_products.find(product => product.id === parseInt(productId));
    return (
        <div>
           <Breadcrumb product={product} />
        </div>
    );
}

export default Product;