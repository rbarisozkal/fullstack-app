import { Request, Response } from 'express';
import { getAllProducts, getProductById } from '../models/productModel';

export const getProducts = (req: Request, res: Response): void => {
    const products = getAllProducts();
    res.json(products);
};

export const getProduct = (req: Request, res: Response): void => {
    const productId = parseInt(req.params.id, 10);
    if (isNaN(productId)) {
        res.status(400).json({ error: 'Invalid product ID' });
        return;
    }

    const product = getProductById(productId);

    if (!product) {
        res.status(404).json({ error: 'Product not found' });
        return;
    }
    res.json(product);
};
