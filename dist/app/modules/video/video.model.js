"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoItem = exports.VideoSchema = void 0;
const mongoose_1 = require("mongoose");
exports.VideoSchema = new mongoose_1.Schema({
    url: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.VideoItem = (0, mongoose_1.model)('Video', exports.VideoSchema);
