import User from "../models/user_model.js";
import Wallet from "../models/wallet_model.js"; 
import jwtService from "../services/jwt-service.js";

export const signup = async (req, res) => {
  try {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role || "user",
      isActive: true,
    });

    const newWallet = await Wallet.create({
      userId: user._id,
      balance: 0,
      currency: 'USD'
    });

    user.walletId = newWallet._id;
    await user.save();

    const token = jwtService.generateAccessToken(user);
    res.status(201).json({ token });
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    res.status(400).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email, isActive: true }).exec();

    if (user && (await user.isValidPassword(req.body.password))) { 
      const token = jwtService.generateAccessToken(user);
      res.json({ token });
    } else {
      res.status(404).json({
        error: "Email or password incorrect, or account inactive",
      });
    }
  } catch (error) {
    console.error("Erro no login:", error);
    res.status(400).json({ error: error.message });
  }
};
