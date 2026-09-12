import { Router } from "express";
import { createUrlController, deleteUrlController, getAllUrlController } from "../controllers/url.controller.js";

const router = Router();

router.post('/create',createUrlController)
router.get('/getall',getAllUrlController)
router.delete('/delete/:code', deleteUrlController)

export default router;
