import express from "express";
import {
  getUserDetails,
  registerUserController,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/register", registerUserController);
router.get("/", getUserDetails);

export default router;
