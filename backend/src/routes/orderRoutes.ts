import { Router, RequestHandler } from 'express';
import { createOrder, getOrderById } from '../controllers/orderControllers';

const router = Router();

router.post('/', createOrder as RequestHandler);
router.get('/:id', getOrderById as RequestHandler);

export default router;
