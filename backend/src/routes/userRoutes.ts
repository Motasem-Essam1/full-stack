import { Router } from 'express';
import { registerUser, loginUser } from '../controllers/userController';
import asyncHandler from '../utils/asyncHandler';

const router = Router();

router.post('/register', asyncHandler(registerUser));
router.post('/login', asyncHandler(loginUser));

export default router;
