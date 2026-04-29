import express from 'express';
import { login, register, verifyOtp } from '../controllers/userController.js';

const router = express.Router();

router.post('/register',register);
router.post('/verifyOtp',verifyOtp);
router.post('/login',login);

export default router;