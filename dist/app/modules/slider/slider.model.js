"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SliderItem = exports.SliderSchema = void 0;
const mongoose_1 = require("mongoose");
exports.SliderSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    des: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.SliderItem = (0, mongoose_1.model)('Slider', exports.SliderSchema);
