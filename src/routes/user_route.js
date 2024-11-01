import { Router } from "express";
import { signup, login } from "../controllers/user_controller.js";
import jwtAuthenticator from "../middlewares/jwt-authenticator.js";

const router = Router();

router.post("/signup", signup);
router.post("/login", login)

export default router;