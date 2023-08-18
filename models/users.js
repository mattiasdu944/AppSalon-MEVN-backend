import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = Schema({
    name: { type: String, required: true, trim: true },
    password: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, unique: true, lowercase: true},
    token: { type: String },
    verified: { type: Boolean, default: false, required: true, trim: true },
    admin: { type: Boolean,  default: false },  
})

// MIDLEWARE ANTES DEL REGISTRO
userSchema.pre('save', async function (next) {
    if( !this.isModified('password') ){
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);

})

const User = model('User', userSchema);

export default User;