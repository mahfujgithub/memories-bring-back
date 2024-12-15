"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GalleryService = void 0;
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const gallery_model_1 = require("./gallery.model");
//  create menu
const createGalleryItem = async (item) => {
    const httpStatus = await import('http-status-ts');
    const existingItem = await gallery_model_1.GalleryItem.findOne({
        title: item.title,
        img: item.img,
        url: item.url
    });
    // If a duplicate is found, throw an error or handle it as needed
    if (existingItem) {
        throw new ApiError_1.default(httpStatus.HttpStatus.CONFLICT, 'Item already exists!');
    }
    // Create the new menu item if no duplicate is found
    const result = await gallery_model_1.GalleryItem.create(item);
    return result;
};
// get all menu
const getGalleryItems = async (items) => {
    const result = await gallery_model_1.GalleryItem.find(items).sort({ createdAt: -1 });
    return result;
};
const updateGalleryItem = async (_id, payload) => {
    const httpStatus = await import('http-status-ts');
    const isExist = await gallery_model_1.GalleryItem.findById(_id);
    if (!isExist) {
        throw new ApiError_1.default(httpStatus.HttpStatus.NOT_FOUND, 'Item not found!');
    }
    const { ...galleryItemData } = payload;
    const updatedItemData = { ...galleryItemData };
    const result = await gallery_model_1.GalleryItem.findByIdAndUpdate({ _id }, updatedItemData, {
        new: true,
    });
    return result;
};
// delete menu
const removeGalleryItem = async (id) => {
    const result = await gallery_model_1.GalleryItem.findByIdAndDelete(id);
    return result;
};
exports.GalleryService = {
    createGalleryItem,
    getGalleryItems,
    updateGalleryItem,
    removeGalleryItem,
};
