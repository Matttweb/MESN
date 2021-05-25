import express from 'express';
import * as authentication from '../controllers/auth.controller'

const router = express.Router();

router.post("/signup", authentication.signUp);

router.post('/signin', authentication.signIn);

export default router;