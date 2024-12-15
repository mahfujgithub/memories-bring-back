"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FontService = void 0;
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const font_model_1 = require("./font.model");
//  create font
const uploadFont = async (item) => {
    const httpStatus = await import('http-status-ts');
    const existingFont = await font_model_1.Font.findOne({ name: item.name });
    if (existingFont) {
        throw new ApiError_1.default(httpStatus.HttpStatus.CONFLICT, 'Font already exists!');
    }
    const result = await font_model_1.Font.create(item);
    return result;
};
// Get all fonts
const getFonts = async () => {
    // Retrieve all fonts sorted by creation date (newest first)
    const fonts = await font_model_1.Font.find().sort({ createdAt: -1 });
    return fonts;
};
// Remove font by ID
const removeFont = async (id) => {
    const font = await font_model_1.Font.findByIdAndDelete(id);
    if (!font) {
        throw new ApiError_1.default(404, 'Font not found!');
    }
};
exports.FontService = {
    uploadFont,
    getFonts,
    removeFont,
};
