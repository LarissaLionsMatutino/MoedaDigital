import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const usuarioSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true 
    },
    createdAt: {
        type: Date,
        default: Date.now 
    },
    walletId: {
        type: Schema.Types.ObjectId,
        ref: 'Wallet',
    },
    role: {
        type: String,
        enum: ['user', 'admin'], 
        default: 'user' 
    },
    isActive: {
        type: Boolean,
        default: true 
    }
});

// Criptografa a senha antes de salvar
usuarioSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

// Verifica se a senha está correta
usuarioSchema.methods.isValidPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

export default model('Usuario', usuarioSchema);
