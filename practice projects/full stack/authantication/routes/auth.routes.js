import {Router} from 'express'
import { registerValidation } from '../validators/auth.validator.js';
import { registerController } from '../controllers/auth.controller.js';

const router = Router();

router.post('/register', registerValidation, registerController)


export default router;