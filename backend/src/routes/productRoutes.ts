import { Router } from 'express';
import { createNewProduct, listProducts } from '../controllers/productController';
import { authenticateToken } from '../middleware/auth';


const router = Router();


router.post('/', authenticateToken, createNewProduct);
router.get('/', listProducts);


export default router;


