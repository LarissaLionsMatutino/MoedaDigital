import { Schema, SchemaType, model} from "mongoose"

const entradaSchema = new Schema ({
    id: {
        type: Schema.Types.ObjectId,
    },
    name: { //nome do usuario
        type: Schema.Types.String,
        required: true
    },
    email: { // Email para autentificação
        type: Schema.Types.String,
        required: true,
        unique:true
    },
    password: { //Senha criptografada
        type: String,

    },
    createdAt:{ //Data de criação do usuario
        type: Schema.Types.Date,
        required: True
    },
    walletId: {
        type: Schema.Types.Date,
        ref: ,
        required: true
    },









