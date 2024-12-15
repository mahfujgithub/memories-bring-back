"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GalleryItemValidation = void 0;
const zod_1 = __importDefault(require("zod"));
const createGalleryItemZodSchema = zod_1.default.object({
    body: zod_1.default.object({
        title: zod_1.default.string().optional(),
        img: zod_1.default.string({
            required_error: 'field is required!',
        }),
        url: zod_1.default.string().optional(),
        videoUrl: zod_1.default.string().optional(),
        zoom: zod_1.default.string().optional(),
    }),
});
const updateGalleryItemZodSchema = zod_1.default.object({
    body: zod_1.default.object({
        title: zod_1.default.string().optional(),
        img: zod_1.default.string().optional(),
        url: zod_1.default.string().optional(),
        videoUrl: zod_1.default.string().optional(),
        zoom: zod_1.default.string().optional(),
    }),
});
exports.GalleryItemValidation = {
    createGalleryItemZodSchema,
    updateGalleryItemZodSchema,
};
