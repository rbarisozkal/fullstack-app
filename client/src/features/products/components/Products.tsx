import React from "react";
import { useProducts } from "../hooks/useProducts";
import ProductItem from "./ProductItem";

const Products: React.FC = () => {
    const { products, isLoading, error } = useProducts();

    if (isLoading) return <p>Loading products...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            {products?.map((product) => (
                <ProductItem key={product.id} {...product} />
            ))}
        </div>
    );
};

export default Products;
