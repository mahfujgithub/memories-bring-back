"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Font = exports.FontSchema = void 0;
const mongoose_1 = require("mongoose");
exports.FontSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    filePath: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Font = (0, mongoose_1.model)('Font', exports.FontSchema);
