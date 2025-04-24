import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true, trim: true },
    profilePicture: { type: String, default: "" },
    admin_user: { type: Boolean, default: false }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;
    
