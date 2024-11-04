import React from "react";
import { Product } from "../configurations/types";

const ProductItem: React.FC<Product> = (product) => {
    return (
        <div>
            <h1>{product.name}</h1>
            <h2>{product.description}</h2>
            <h3>{product.price}</h3>
        </div>
    );
};

export default ProductItem;
