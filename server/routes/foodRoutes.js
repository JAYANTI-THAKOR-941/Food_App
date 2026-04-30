import express from 'express';
import { addFood, deleteFood, getAllFood, getFoodById, updateFood } from '../controllers/foodControllers.js';
import { isAdmin, isAuth } from '../middlewares/isAuth.js';

const router = express.Router();

// admin routes - Protected
router.post('/add',isAuth,isAdmin,addFood);
router.put('/update/:id',isAuth,isAdmin,updateFood);
router.delete('/delete/:id',isAuth,isAdmin,deleteFood);

// public routes
router.get('/all',getAllFood);
router.get('/:id',getFoodById);

export default router;