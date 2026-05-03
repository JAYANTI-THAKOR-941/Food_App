import express from 'express';
import { forgotPassword, login, register, resetPassword, verifyOtp } from '../controllers/userController.js';

const router = express.Router();

router.post('/register',register);
router.post('/verifyOtp',verifyOtp);
router.post('/login',login);

router.post('/forgot-password',forgotPassword);
router.post('/reset-password/:token',resetPassword);

export default router;