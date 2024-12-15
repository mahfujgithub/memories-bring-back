"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SliderItemController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const slider_service_1 = require("./slider.service");
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
// create menu
const createSliderItem = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    const item = req.body;
    const result = await slider_service_1.SliderItemService.createSliderItem(item);
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: `Item created successfully!`,
        data: result,
    });
});
// get all slider
const getSliderItems = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    const item = req.body;
    const result = await slider_service_1.SliderItemService.getSliderItems(item);
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: 'Item Retrieved SuccessFully',
        data: result,
    });
});
// update single slider
const updateSliderItem = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    const { id } = req.params;
    const updatedItem = req.body;
    const result = await slider_service_1.SliderItemService.updateSliderItem(id, updatedItem);
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: 'Item Updated SuccessFully',
        data: result,
    });
});
// delete slider
const removeSliderItem = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    const { id } = req.params;
    const result = await slider_service_1.SliderItemService.removeSliderItem(id);
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: 'Delete Slider SuccessFully',
        data: result,
    });
});
exports.SliderItemController = {
    createSliderItem,
    getSliderItems,
    updateSliderItem,
    removeSliderItem,
};
