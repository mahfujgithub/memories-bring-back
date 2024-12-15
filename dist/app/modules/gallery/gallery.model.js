"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GalleryItem = exports.GalleryItemSchema = void 0;
const mongoose_1 = require("mongoose");
exports.GalleryItemSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: false,
    },
    img: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: false,
    },
    videoUrl: {
        type: String,
        required: false,
    },
    zoom: {
        type: String,
        required: false,
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.GalleryItem = (0, mongoose_1.model)('Gallery', exports.GalleryItemSchema);
