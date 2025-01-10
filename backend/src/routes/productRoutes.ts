import { Router } from 'express';
import { getMenu, getProductById } from '../controllers/productController';

const router = Router();

router.get('/', getMenu);              // GET /api/products
router.get('/:id', getProductById);    // GET /api/products/:id

export default router;
