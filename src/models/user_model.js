import { Schema, model } from "mongoose";

const usuarioSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        auto: true // O Mongoose irá gerar automaticamente um ObjectId
    },
    name: { // Nome do usuário
        type: String,
        required: true
    },
    email: { // Email para autenticação
        type: String,
        required: true,
        unique: true
    },
    password: { // Senha criptografada
        type: String,
        required: true 
    },
    createdAt: { // Data de criação do usuário
        type: Date,
        default: Date.now 
    },
    walletId: {
        type: Schema.Types.ObjectId,
        ref: 'Wallet', // Referência à coleção de carteiras
        required: true
    },
    role: { // Permissões do usuário
        type: String,
        enum: ['user', 'admin'], 
        default: 'user' 
    },
    isActive: { // Status da conta do usuário
        type: Boolean,
        default: true 
    }
});

export default model('Usuario', usuarioSchema);
