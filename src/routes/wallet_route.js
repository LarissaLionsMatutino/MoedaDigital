import { Router } from "express";
import { store as createWallet, index as getWallets } from "../controllers/wallet_controller.js"; // Ajuste o caminho conforme necessário
import jwtAuthenticator from "../middlewares/jwt-authenticator.js";

const router = Router();

// Rota para criar uma nova carteira (privada)
router.post("/", jwtAuthenticator, createWallet);

// Rota para listar as carteiras do usuário autenticado (privada)
router.get("/", jwtAuthenticator, getWallets);

export default router;
