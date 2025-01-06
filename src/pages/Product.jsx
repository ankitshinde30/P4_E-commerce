import React, {useContext} from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import Breadcrumb from "../components/Breadcrums/Breadcrum";
import ProductDisplay from "../components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../components/DescriptionBox/DescriptionBox";





const Product = () => {
    const {all_products} = useContext(ShopContext);
    const {productId} = useParams();
    const product = all_products.find(product => product.id === parseInt(productId));
    return (
        <div>
           <Breadcrumb product={product} />
              <ProductDisplay product={product} />
              <DescriptionBox />


        </div>
    );
}

export default Product;