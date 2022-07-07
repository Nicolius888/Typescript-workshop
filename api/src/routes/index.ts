import {Router} from 'express';
import userRoutes from './user';
const router = Router();
console.log("estoy en el index");
router.use('/', userRoutes);

export default router;