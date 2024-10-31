import User from "../models/user_model.js";
import Wallet from "../models/wallet_model.js"; // Certifique-se de que o caminho está correto
import jwtService from "../services/jwt-service.js";

export const signup = async (req, res) => {
  try {
    // Criar um novo usuário primeiro
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password, // Lembre-se de criptografar a senha
      createdAt: new Date(),
      role: req.body.role || "user", // Padrão "user" se não especificado
      isActive: true,               // Padrão ativo no momento de criação
    });

    // Criar uma nova carteira usando o ID do usuário
    const newWallet = await Wallet.create({
      userId: user._id,             // Referenciando o ID do usuário recém-criado
      balance: 0,                   // Saldo inicial
      currency: 'USD'               // Moeda padrão
    });

    // Atualizar o usuário com o walletId da nova carteira
    user.walletId = newWallet._id; // Associar o walletId
    await user.save();              // Salvar o usuário atualizado

    // Gerar o token JWT
    const token = jwtService.generateAccessToken(user);

    res.status(201).json({ token });
  } catch (error) {
    res.status(400).send(error);
  }
};

export const login = async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
      isActive: true, // Confirma que a conta está ativa
    }).exec();

    if (user && (await user.isValidPassword(req.body.password))) { ///user.isValidPassword is not a function
      const token = jwtService.generateAccessToken(user);
      res.json({ token });
    } else {
      res.status(404).json({
        error: "Email or password incorrect, or account inactive",
      });
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};
