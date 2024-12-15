"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SliderItemValidation = void 0;
const zod_1 = __importDefault(require("zod"));
const createSliderItemZodSchema = zod_1.default.object({
    body: zod_1.default.object({
        title: zod_1.default.string({
            required_error: 'field is required!',
        }),
        des: zod_1.default.string({
            required_error: 'field is required!',
        }),
        img: zod_1.default.string({
            required_error: 'field is required!',
        }),
    }),
});
const updateSliderItemZodSchema = zod_1.default.object({
    body: zod_1.default.object({
        title: zod_1.default.string().optional(),
        des: zod_1.default.string().optional(),
        img: zod_1.default.string().optional(),
    }),
});
exports.SliderItemValidation = {
    createSliderItemZodSchema,
    updateSliderItemZodSchema,
};
