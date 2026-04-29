import express from 'express';
import { addFood, deleteFood, getAllFood, getFoodById, updateFood } from '../controllers/foodControllers.js';

const router = express.Router();

router.post('/add',addFood);
router.put('/update/:id',updateFood);
router.delete('/delete/:id',deleteFood);
router.get('/all',getAllFood);
router.get('/:id',getFoodById);

export default router;