"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const bcrypt_1 = __importDefault(require("bcrypt"));
const config_1 = __importDefault(require("../../../config"));
const UserSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        select: 0,
    },
    role: {
        type: String,
        required: true,
        enum: ['Admin', 'Guest']
    },
}, {
    timestamps: true,
});
UserSchema.statics.isUserExist = async function (email) {
    return await exports.User.findOne({ email }, { email: 1, password: 1, role: 1 }).lean();
};
UserSchema.statics.isPasswordMatched = async function (givenPassword, savedPassword) {
    return await bcrypt_1.default.compare(givenPassword, savedPassword);
};
UserSchema.pre('save', async function (next) {
    // hashing user password
    const user = this;
    user.password = await bcrypt_1.default.hash(user.password, Number(config_1.default.bycrypt_salt_rounds));
    next();
});
exports.User = (0, mongoose_1.model)('Users', UserSchema);
