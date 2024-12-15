"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoItemController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const video_service_1 = require("./video.service");
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
// create menu
const createVideoItem = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    const item = req.body;
    const result = await video_service_1.VideoItemService.createVideoItem(item);
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: `Item created successfully!`,
        data: result,
    });
});
// get all video
const getVideoItems = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    const item = req.body;
    const result = await video_service_1.VideoItemService.getVideoItems(item);
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: 'Item Retrieved SuccessFully',
        data: result,
    });
});
// delete video
const removeVideoItem = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    const { id } = req.params;
    const result = await video_service_1.VideoItemService.removeVideoItem(id);
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: 'Delete Video SuccessFully',
        data: result,
    });
});
exports.VideoItemController = {
    createVideoItem,
    getVideoItems,
    removeVideoItem,
};
