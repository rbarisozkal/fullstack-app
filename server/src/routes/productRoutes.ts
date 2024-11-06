import express from 'express';
import { getProducts, getProduct } from '../controllers/productController';

const productRouter = express.Router();

productRouter.get('/', getProducts);       // GET /api/products
productRouter.get('/:id', getProduct);     // GET /api/products/:id -> params

export default productRouter;
