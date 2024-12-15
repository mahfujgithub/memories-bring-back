"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GalleryController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const gallery_service_1 = require("./gallery.service");
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
// create gallery
const createGalleryItem = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    const item = req.body;
    const result = await gallery_service_1.GalleryService.createGalleryItem(item);
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: `Item created successfully!`,
        data: result,
    });
});
// get items
const getGalleryItems = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    const item = req.body;
    const result = await gallery_service_1.GalleryService.getGalleryItems(item);
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: 'Items Retrieved SuccessFully',
        data: result,
    });
});
// update single gallery
const updateGalleryItem = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    const { id } = req.params;
    const updatedItem = req.body;
    const result = await gallery_service_1.GalleryService.updateGalleryItem(id, updatedItem);
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: 'Item Updated SuccessFully',
        data: result,
    });
});
// delete gallery
const removeGalleryItem = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    const { id } = req.params;
    const result = await gallery_service_1.GalleryService.removeGalleryItem(id);
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: 'Item Delete SuccessFully',
        data: result,
    });
});
exports.GalleryController = {
    createGalleryItem,
    getGalleryItems,
    updateGalleryItem,
    removeGalleryItem,
};
