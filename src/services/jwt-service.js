import jsonwebtoken from "jsonwebtoken";

const generateAccessToken = (user) => { // Corrigi a grafia de "Acess" para "Access"
  const token = jsonwebtoken.sign(
    {
      _id: user._id,
      email: user.email,
      role: user.role,
    },
    process.env.JWT_PRIVATE_KEY,
    {
      expiresIn: "1d",
    }
  );
  return token;
};

const verifyAccessToken = (token) => {
  try {
    const user = jsonwebtoken.verify(token, process.env.JWT_PRIVATE_KEY);
    return user; // Retorna o usuário decodificado
  } catch (error) {
    throw new Error("Invalid token"); // Lança um erro se o token não for válido
  }
};

export default {
  generateAccessToken,
  verifyAccessToken,
};
