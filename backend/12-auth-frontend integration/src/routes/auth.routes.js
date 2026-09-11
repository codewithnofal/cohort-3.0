import { Router } from "express";
import {
    getNewTokens,
  getUserDetails,
  registerUserController,
} from "../controllers/auth.controller.js";

const router = Router();

router.post("/register", registerUserController);
router.get("/me", getUserDetails);
router.post('/refresh', getNewTokens)

export default router;
