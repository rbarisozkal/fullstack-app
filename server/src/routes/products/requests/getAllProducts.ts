// routes/products/getAllProducts.ts
import { Request, Response } from 'express';
import { products } from '../../../constants/products';

export const getAllProducts = (req: Request, res: Response): void => {
    // we are parsing products as json object since they are object
    res.json(products);
};
