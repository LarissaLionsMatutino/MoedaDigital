import Transaction from "../models/transaction-model.js";

export const store = async (req, res) => {
  try {
    const { walletTo, amount } = req.body;
    const walletFrom = await Wallet.findOne({ userId: req.user._id });

    if (walletFrom.balance < amount) {
      return res.status(400).json({ message: "Saldo insuficiente." });
    }

    walletFrom.balance -= amount;
    const walletToObj = await Wallet.findById(walletTo);
    walletToObj.balance += amount;
    await walletFrom.save();
    await walletToObj.save();

    const newTransaction = await Transaction.create({
      walletFrom: walletFrom._id,
      walletTo: walletTo,
      amount,
      type: 'transfer',
      status: 'completed'
    });

    res.status(201).json(newTransaction);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const index = async (req, res) => {
  try {
    const transactions = await Transaction.find({ walletFrom: req.user.walletId }).exec();
    res.json(transactions);
  } catch (error) {
    res.status(400).send(error);
  }
};