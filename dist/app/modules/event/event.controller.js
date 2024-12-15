"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventItemController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const event_service_1 = require("./event.service");
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
// create event here
const createEventItem = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    const item = req.body;
    const result = await event_service_1.EventService.createEvent(item);
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: `Item created successfully!`,
        data: result,
    });
});
// get all event here
const getEventItems = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    const item = req.body;
    const result = await event_service_1.EventService.getEvents(item);
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: 'Item Retrieved SuccessFully',
        data: result,
    });
});
const getSingleEventItem = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    const { id } = req.params;
    const result = await event_service_1.EventService.getSingleEvent(id);
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: 'Event Item Retrieved successfully!',
        data: result,
    });
});
// update single event
const updateEventItem = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    const { id } = req.params;
    const updatedItem = req.body;
    const result = await event_service_1.EventService.updateEvent(id, updatedItem);
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: 'Item Updated SuccessFully',
        data: result,
    });
});
// delete event
const removeEventItem = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    const { id } = req.params;
    const result = await event_service_1.EventService.removeEvent(id);
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: 'Delete Event SuccessFully',
        data: result,
    });
});
exports.EventItemController = {
    createEventItem,
    getEventItems,
    getSingleEventItem,
    updateEventItem,
    removeEventItem,
};
