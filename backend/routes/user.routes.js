import express from "express";
import { login, logout, register, getProfile } from "../controller/user.controller.js";

// Add this route

const router = express.Router();

router.route("/register").post(register);

router.route("/login").post(login);

router.route("/logout").get(logout);
router.route("/profile").get(getProfile);
router.post("/register", register); // ✅ this should exist
router.post("", logout);

export default router;


