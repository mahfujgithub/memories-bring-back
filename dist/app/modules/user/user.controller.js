"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_service_1 = require("./user.service"); // Replace with your actual service path
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const createUser = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    // Extract user data from the request body
    const { ...userData } = req.body;
    // Call the service to create the user
    const result = await user_service_1.UserService.createUser(userData);
    // Send a successful response
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.CREATED,
        success: true,
        message: `${result?.email} created successfully!`,
        data: result,
    });
});
const getAllUser = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    const userData = req.body;
    const result = await user_service_1.UserService.getAllUser(userData);
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: 'Users Retrieved successfully!',
        data: result,
    });
});
const getSingleUser = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    const { id } = req.params;
    const result = await user_service_1.UserService.getSingleUser(id);
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: 'User Retrieved successfully!',
        data: result,
    });
});
const updateUser = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    const { id } = req.params;
    const updatedUser = req.body;
    const result = await user_service_1.UserService.updateUser(id, updatedUser);
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: 'User Updated successfully!',
        data: result,
    });
});
const deleteUser = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    // Extract user ID from the request parameters
    const { id } = req.params;
    console.log(id);
    // Call the service to delete the user
    const result = await user_service_1.UserService.deleteUser(id);
    // Send a successful response
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: `User deleted successfully!`,
        // data: result,
    });
});
exports.UserController = {
    createUser,
    getAllUser,
    getSingleUser,
    updateUser,
    deleteUser,
};
