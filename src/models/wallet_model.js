import { Schema, model } from "mongoose";

const carteiraSchema = new Schema({
    userId: { // Referência ao proprietário da carteira
        type: Schema.Types.ObjectId,
        required: true, 
        ref: 'Usuario' 
    },
    balance: { // Saldo da carteira
        type: Number,
        default: 0, 
        required: true 
    },
    currency: { // Tipo de moeda (e.g., "USD", "BRL", "BTC")
        type: String,
        required: true 
    },
    createdAt: { // Data de criação da carteira
        type: Date,
        default: Date.now 
    }
});

export default model('Carteira', carteiraSchema)
