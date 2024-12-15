"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MusicItem = exports.MusicSchema = void 0;
const mongoose_1 = require("mongoose");
exports.MusicSchema = new mongoose_1.Schema({
    musicUrl: {
        type: [String],
        required: true,
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.MusicItem = (0, mongoose_1.model)('music', exports.MusicSchema);
