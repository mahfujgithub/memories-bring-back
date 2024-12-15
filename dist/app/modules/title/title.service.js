"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TitleService = void 0;
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const title_model_1 = require("./title.model");
//  create menu
const createTitle = async (item) => {
    const httpStatus = await import('http-status-ts');
    const existingStorey = await title_model_1.Title
        .findOne({
        title: item.title,
        des: item.des,
    });
    // If a duplicate is found, throw an error or handle it as needed
    if (existingStorey) {
        throw new ApiError_1.default(httpStatus.HttpStatus.CONFLICT, 'Slider already exists!');
    }
    // Create the new menu item if no duplicate is found
    const result = await title_model_1.Title.create(item);
    return result;
};
// get all menu
const getTitles = async (item) => {
    const result = await title_model_1.Title.find(item).sort({ createdAt: -1 });
    return result;
};
const getSingleTitle = async (id) => {
    const result = await title_model_1.Title.findById(id);
    return result;
};
const updateTitle = async (_id, payload) => {
    const httpStatus = await import('http-status-ts');
    const isExist = await title_model_1.Title.findById(_id);
    if (!isExist) {
        throw new ApiError_1.default(httpStatus.HttpStatus.NOT_FOUND, 'Item not found!');
    }
    const { ...sliderItemData } = payload;
    const updatedItemData = { ...sliderItemData };
    const result = await title_model_1.Title.findByIdAndUpdate({ _id }, updatedItemData, {
        new: true,
    });
    return result;
};
// delete menu
const removeTitle = async (id) => {
    const result = await title_model_1.Title.findByIdAndDelete(id);
    return result;
};
exports.TitleService = {
    createTitle,
    getTitles,
    getSingleTitle,
    updateTitle,
    removeTitle
};
