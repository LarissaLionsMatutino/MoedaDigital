import { Schema, SchemaType, model} from "mongoose"

const entradaSchema = new Schema ({
   walletFrom:  { //carteira de origin
     type : ObjectId,
     required : true,
    },
    walletTo: { //carteira de destino
        type : ObjectId,
        required : true,
    },
    amount: { //valor da transação positivo deposito e negativos saques
        type : Number,
        required : true,
    },
    type: { //tipo de transação (transfer, deposit,withdraw)
        type: String,

    },
    status: { //completed, pending, failed
        type: String
    },
    createdAt: {
        type: Date,
    },
    currency: {
        type: String
    },
    details: {
        type: String
    }
})

