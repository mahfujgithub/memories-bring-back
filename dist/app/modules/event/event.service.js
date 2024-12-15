"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventService = void 0;
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const event_model_1 = require("./event.model");
//  create menu
const createEvent = async (item) => {
    const httpStatus = await import('http-status-ts');
    const existingEvent = await event_model_1.Event.findOne({
        title: item.title,
        des: item.des,
    });
    // If a duplicate is found, throw an error or handle it as needed
    if (existingEvent) {
        throw new ApiError_1.default(httpStatus.HttpStatus.CONFLICT, 'Event already exists!');
    }
    // Create the new menu item if no duplicate is found
    const result = await event_model_1.Event.create(item);
    return result;
};
// get all menu
const getEvents = async (item) => {
    const result = await event_model_1.Event.find(item).sort({ createdAt: -1 });
    return result;
};
const getSingleEvent = async (id) => {
    const result = await event_model_1.Event.findById(id);
    return result;
};
const updateEvent = async (_id, payload) => {
    const httpStatus = await import('http-status-ts');
    const isExist = await event_model_1.Event.findById(_id);
    if (!isExist) {
        throw new ApiError_1.default(httpStatus.HttpStatus.NOT_FOUND, 'Item not found!');
    }
    const { ...eventItemData } = payload;
    const updatedItemData = { ...eventItemData };
    const result = await event_model_1.Event.findByIdAndUpdate({ _id }, updatedItemData, {
        new: true,
    });
    return result;
};
// delete menu
const removeEvent = async (id) => {
    const result = await event_model_1.Event.findByIdAndDelete(id);
    return result;
};
exports.EventService = {
    createEvent,
    getEvents,
    getSingleEvent,
    updateEvent,
    removeEvent,
};
