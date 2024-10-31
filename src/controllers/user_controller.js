import User from "../models/user_model.js";
import jwtService from "../services/jwt-service.js";

export const signup = async (req, res) => {
  try {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      createdAt: new Date(),
      walletId: req.body.walletId,
      role: req.body.role || "user",  // padrão "user" se não especificado
      isActive: true,                 // padrão ativo no momento de criação
    });

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
      isActive: true,                 // Confirma que a conta está ativa
    }).exec();

    if (user && (await user.isValidPassword(req.body.password))) {
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
