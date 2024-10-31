import mongoose from "mongoose";

(async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log("Conectado ao banco de dados local");
  } catch (error) {
    console.log(error);
  }
})();