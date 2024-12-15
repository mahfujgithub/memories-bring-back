"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SliderItemController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const storey_service_1 = require("./storey.service");
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
// create menu
const createStoreyItem = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    const item = req.body;
    const result = await storey_service_1.StoreyItemService.createStoreyItem(item);
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: `Item created successfully!`,
        data: result,
    });
});
// get all story
const getStoreyItems = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    const item = req.body;
    const result = await storey_service_1.StoreyItemService.getStoreyItems(item);
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: 'Item Retrieved SuccessFully',
        data: result,
    });
});
const getSingleStoreyItem = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    const { id } = req.params;
    const result = await storey_service_1.StoreyItemService.getSingleStoreyItem(id);
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: 'Storey Item Retrieved successfully!',
        data: result,
    });
});
// update single story
const updateStoreyItem = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    const { id } = req.params;
    const updatedItem = req.body;
    const result = await storey_service_1.StoreyItemService.updateStoreyItem(id, updatedItem);
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: 'Item Updated SuccessFully',
        data: result,
    });
});
// delete story
const removeStoreyItem = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    const { id } = req.params;
    const result = await storey_service_1.StoreyItemService.removeStoreyItem(id);
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: 'Delete Storey SuccessFully',
        data: result,
    });
});
exports.SliderItemController = {
    createStoreyItem,
    getStoreyItems,
    getSingleStoreyItem,
    updateStoreyItem,
    removeStoreyItem,
};
