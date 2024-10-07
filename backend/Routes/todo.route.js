import express from 'express';
import { verifyToken } from '../middleware/verifyToken.js'; 
import {
  getTodos,
  deleteTodo,
  updateTodo,
  createTodo,
  updatePinned,
} from '../Controllers/todo.controller.js';

const router = express.Router();

router.post('/add', verifyToken, createTodo);

router.post('/getTodo', verifyToken, getTodos);

router.delete('/deleteTodo/:id', verifyToken, deleteTodo);

router.put('/editTodo/:id', verifyToken, updateTodo);

router.put('/update-pin/:id', verifyToken, updatePinned);


export default router;
