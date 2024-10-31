import jwtService from "../services/jwt-service.js";

const jwtAuthenticator = (req, res, next) => {
  try {
    // Verifica se o cabeçalho Authorization está presente
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ error: "No token provided." });
    }

    // Extrai o token do cabeçalho
    const token = authHeader.split(" ")[1];

    // Verifica e decodifica o token
    const user = jwtService.verifyAccessToken(token);
    req.user = user; // Adiciona o usuário ao objeto req

    next();
  } catch (error) {
    console.error("JWT Authentication Error:", error);
    res.status(401).json({ error: "Invalid token." });
  }
};

export default jwtAuthenticator;
