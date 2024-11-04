// routes/products/getProductById.ts
import { Request, Response } from 'express';
import { products } from '../../../constants/products';

export const getProductById = (req: Request, res: Response): void => {
    const productId = parseInt(req.params.id, 10);
    const product = products.find((p) => p.id === productId);

    if (!product) {
        res.status(404).json({ error: 'Product not found' });
        return;
    }

    res.json(product);
};
