import { Router } from 'express';
import { TokenValidation } from '../middlewares/verifyToken';
import { createOrder, getOrders, readOrder } from '../controllers/order.controller';

const router = Router();

router.use(TokenValidation);

router.route("/")
    .post(createOrder)
    .get(getOrders);

router.route("/:id")
    .get(readOrder)

export default router;