import { Router } from "express";
import { store as createTransaction, index as getTransactions } from "../controllers/transaction_controller.js"; // Ajuste o caminho conforme necessário
import jwtAuthenticator from "../middlewares/jwt-authenticator.js";

const router = Router();

// Rota para criar uma nova transação (privada)
router.post("/", jwtAuthenticator, createTransaction);

// Rota para listar as transações do usuário autenticado (privada)
router.get("/", jwtAuthenticator, getTransactions);

export default router;