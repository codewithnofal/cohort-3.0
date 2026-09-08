import { Router } from "express";
import {
  getUserDetails,
  registerUserController,
} from "../controllers/auth.controller.js";

const router = Router();

router.post("/register", registerUserController);
router.get("/me", getUserDetails);

export default router;
