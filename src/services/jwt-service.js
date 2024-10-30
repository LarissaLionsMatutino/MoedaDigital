import jsonwebtoken from "jsonwebtoken"
const generateAcessToken  = (user) =>  {    //"crachá de acesso"
 const token = jsonwebtoken.sign({
    _id: user._id,
    email: user.email,
    role: user.role,
   
 }, 
  process.env.JWT_PRIVATE_KEY,
  {
    expiresIn: "1d"
})
return token;
}

const verifyAcessToken = (token) => user = jsonwebtoken.verify(token, process.env.JWT_PRIVATE_KEY)



export default {
    generateAcessToken,
    verifyAcessToken
}