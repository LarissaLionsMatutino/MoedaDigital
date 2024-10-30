import { Schema, SchemaType, model} from "mongoose"

const entradaSchema = new Schema ({
    id: {
        type: Schema.Types.ObjectId,
    },
    UserId: { //refencia ao proprietario da carteira
        type: Schema.Types.ObjectId,

    },
    balance:{ //saldo da carteira 
        type: Number,

    },
    currency: { //tipo de moeda (USD, BRL, BTC)
        type: Number,

    },
    createdAt: { //Data de criação da carteira
        type: Date
    }

})