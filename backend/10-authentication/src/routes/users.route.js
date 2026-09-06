import express from "express";
import {
  getUserDetailsController,
  loginUserController,
  registerUserController,
} from "../controllers/user.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/register", registerUserController);
router.get("/", authenticate, getUserDetailsController);
router.post("/login", loginUserController);

export default router;
