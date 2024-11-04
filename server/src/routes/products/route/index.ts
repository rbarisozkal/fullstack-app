import express from 'express';
import { getAllProducts } from '../requests/getAllProducts';
import { getProductById } from '../requests/getProductById';

const productRouter = express.Router();

//products api endpoints
productRouter.get('/', getAllProducts); // GET /api/products/
productRouter.get('/:id', getProductById); // GET /api/products/:id

export default productRouter;
