import e from "express";
import "dotenv/config";
import "./config/db.js"
import transaction_route from "./routes/transaction_route.js"
import user_route from "./routes/user_route.js"
import wallet_route from "./routes/wallet_route"

const app = e();

app.use(e.json());
app.use("/transaction", transaction_route)
app.use("/user", user_route)
app.use("/wallet", wallet_route)

app.listen(process.env.API_PORT, () => console.log("Server running"));