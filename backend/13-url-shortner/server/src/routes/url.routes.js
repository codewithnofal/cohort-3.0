import { Router } from "express";
import { createUrlController, getAllUrlController } from "../controllers/url.controller.js";

const router = Router();

router.post('/create',createUrlController)
router.get('/getall',getAllUrlController)

export default router;
