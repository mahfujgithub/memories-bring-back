"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MusicItemController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const music_service_1 = require("./music.service");
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
// create menu
const createMusicItem = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    const item = req.body;
    const result = await music_service_1.MusicItemService.createMusicItem(item);
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: `Item created successfully!`,
        data: result,
    });
});
// get all slider
const getMusicItems = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    const item = req.body;
    const result = await music_service_1.MusicItemService.getMusicItems(item);
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: 'Item Retrieved SuccessFully !!',
        data: result,
    });
});
// delete slider
const removeStoreyItem = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    const { id } = req.params;
    const result = await music_service_1.MusicItemService.removeMusicItem(id);
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: 'Delete music SuccessFully',
        data: result,
    });
});
exports.MusicItemController = {
    createMusicItem,
    getMusicItems,
    removeStoreyItem,
};
