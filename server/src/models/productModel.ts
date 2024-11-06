import { Product } from '../types/product';
import { products } from '../constants/products';

export const getAllProducts = (): Product[] => {
    return products;
};

export const getProductById = (id: number): Product | undefined => {
    return products.find((product) => product.id === id);
};
