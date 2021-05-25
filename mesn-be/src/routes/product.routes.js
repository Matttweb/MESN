import express from 'express';
import { TokenValidation } from '../middlewares/verifyToken';
import * as product from '../controllers/product.controller';
import multer from '../middlewares/multer';

const router = express.Router();

router.use(TokenValidation);

router.route("/")
    .post(multer, product.createProduct)
    .get(product.getProducts);

router.route("/:id")
    .get(product.readProduct)
    .put(multer, product.updateProduct)
    .delete(product.deleteProduct);

export default router;