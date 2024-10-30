import { Schema, SchemaType, model} from "mongoose"

const entradaSchema = new Schema ({
    id: {
        type: Schema.Types.ObjectId,
    },
    name: {
        type: Schema.Types.String,
        required: true
    },
    email: { //autentificação
        type: Schema.Types.String,
        required: true,
        unique:true
    },
    password: {

    },
    createdAt:{
        type: Schema.Types.Date,
        required: True
    },
    walletId: {
        type: Schema.Types.Date,
        ref: ,
        required: true
    },









