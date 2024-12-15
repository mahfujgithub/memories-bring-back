"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FontController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const font_service_1 = require("./font.service");
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
// create font
const uploadFont = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    const file = req.file;
    const { name } = req.body;
    if (!file) {
        throw new Error('Font file is required');
    }
    const result = await font_service_1.FontService.uploadFont({ name, filePath: file.path });
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: `Font uploaded successfully!`,
        data: result,
    });
});
// Get all fonts
const getFonts = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    const result = await font_service_1.FontService.getFonts();
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: 'Fonts retrieved successfully!',
        data: result,
    });
});
// Remove a font
const removeFont = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    const { id } = req.params;
    await font_service_1.FontService.removeFont(id);
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: 'Font removed successfully!',
        data: null,
    });
});
exports.FontController = {
    uploadFont,
    getFonts,
    removeFont,
};
