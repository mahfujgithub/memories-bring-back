"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreyItemService = void 0;
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const storey_model_1 = require("./storey.model");
//  create story
const createStoreyItem = async (item) => {
    const httpStatus = await import('http-status-ts');
    const existingStorey = await storey_model_1.StoreyItem.findOne({
        title: item.title,
        des: item.des,
        images: item.images
    });
    // If a duplicate is found, throw an error here
    if (existingStorey) {
        throw new ApiError_1.default(httpStatus.HttpStatus.CONFLICT, 'story already exists!');
    }
    // Create the story item if no duplicate is found
    const result = await storey_model_1.StoreyItem.create(item);
    return result;
};
// get all story
const getStoreyItems = async (item) => {
    const result = await storey_model_1.StoreyItem.find(item).sort({ createdAt: -1 });
    return result;
};
const getSingleStoreyItem = async (id) => {
    const result = await storey_model_1.StoreyItem.findById(id);
    return result;
};
const updateStoreyItem = async (_id, payload) => {
    const httpStatus = await import('http-status-ts');
    const isExist = await storey_model_1.StoreyItem.findById(_id);
    if (!isExist) {
        throw new ApiError_1.default(httpStatus.HttpStatus.NOT_FOUND, 'Item not found!');
    }
    const { ...sliderItemData } = payload;
    const updatedItemData = { ...sliderItemData };
    const result = await storey_model_1.StoreyItem.findByIdAndUpdate({ _id }, updatedItemData, {
        new: true,
    });
    return result;
};
// delete story
const removeStoreyItem = async (id) => {
    const result = await storey_model_1.StoreyItem.findByIdAndDelete(id);
    return result;
};
exports.StoreyItemService = {
    createStoreyItem,
    getStoreyItems,
    getSingleStoreyItem,
    updateStoreyItem,
    removeStoreyItem,
};
