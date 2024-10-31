import { Schema, model } from "mongoose";

const transacaoSchema = new Schema({
    walletFrom: { // Carteira de origem
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Wallet' 
    },
    walletTo: { // Carteira de destino
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Wallet' 
    },
    amount: { // Valor da transação (positivo para depósitos, negativo para saques)
        type: Number,
        required: true,
    },
    type: { // Tipo de transação (transfer, deposit, withdraw)
        type: String,
        enum: ['transfer', 'deposit', 'withdraw'], 
        required: true,
    },
    status: { // Status da transação (completed, pending, failed)
        type: String,
        enum: ['completed', 'pending', 'failed'], 
        required: true,
    },
    createdAt: { // Data da transação
        type: Date,
        default: Date.now, // Define a data atual como padrão
    },
    currency: { // Tipo de moeda envolvida
        type: String,
        required: true, 
    },
    details: { // Detalhes opcionais sobre a transação
        type: String,
        default: '', 

    }
});

export default model('Transaction', transacaoSchema)