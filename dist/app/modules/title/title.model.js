"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Title = exports.TitleSchema = void 0;
const mongoose_1 = require("mongoose");
exports.TitleSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    des: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Title = (0, mongoose_1.model)('Title', exports.TitleSchema);
