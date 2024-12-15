"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SliderItemService = void 0;
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const slider_model_1 = require("./slider.model");
//  create menu
const createSliderItem = async (item) => {
    const httpStatus = await import('http-status-ts');
    const existingSlider = await slider_model_1.SliderItem.findOne({
        title: item.title,
        des: item.des,
        img: item.img,
    });
    // If a duplicate is found, throw an error or handle it as needed
    if (existingSlider) {
        throw new ApiError_1.default(httpStatus.HttpStatus.CONFLICT, 'Slider already exists!');
    }
    // Create the new menu item if no duplicate is found
    const result = await slider_model_1.SliderItem.create(item);
    return result;
};
// get all menu
const getSliderItems = async (item) => {
    const result = await slider_model_1.SliderItem.find(item).sort({ createdAt: -1 });
    return result;
};
const updateSliderItem = async (_id, payload) => {
    const httpStatus = await import('http-status-ts');
    const isExist = await slider_model_1.SliderItem.findById(_id);
    if (!isExist) {
        throw new ApiError_1.default(httpStatus.HttpStatus.NOT_FOUND, 'Item not found!');
    }
    const { ...sliderItemData } = payload;
    const updatedItemData = { ...sliderItemData };
    const result = await slider_model_1.SliderItem.findByIdAndUpdate({ _id }, updatedItemData, {
        new: true,
    });
    return result;
};
// delete menu
const removeSliderItem = async (id) => {
    const result = await slider_model_1.SliderItem.findByIdAndDelete(id);
    return result;
};
exports.SliderItemService = {
    createSliderItem,
    getSliderItems,
    updateSliderItem,
    removeSliderItem,
};
