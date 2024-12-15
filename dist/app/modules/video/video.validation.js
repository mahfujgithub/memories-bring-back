"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoItemValidation = void 0;
const zod_1 = __importDefault(require("zod"));
const createVideoItemZodSchema = zod_1.default.object({
    body: zod_1.default.object({
        url: zod_1.default.string({
            required_error: 'field is required!',
        })
    }),
});
const updateVideoItemZodSchema = zod_1.default.object({
    body: zod_1.default.object({
        url: zod_1.default.string().optional(),
    }),
});
exports.VideoItemValidation = {
    createVideoItemZodSchema,
    updateVideoItemZodSchema,
};
