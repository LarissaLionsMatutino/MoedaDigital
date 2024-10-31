import Wallet from "../models/wallet-model.js";

export const store = async (req, res) => {
  try {
    const newWallet = await Wallet.create({
      userId: req.user._id,
      balance: 0, // Saldo inicial
      currency: 'USD' // Moeda padrão
    });

    res.status(201).json(newWallet);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const index = async (req, res) => {
  try {
    const wallets = await Wallet.find({ userId: req.user._id }).exec();
    res.json(wallets);
  } catch (error) {
    res.status(400).send(error);
  }
};
