import { Request, Response } from 'express';
import { UserService } from './user.service'; // Replace with your actual service path
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IUser } from './user.interface';


const createUser = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');

  // Extract user data from the request body
  const { ...userData } = req.body;

  // Call the service to create the user
  const result = await UserService.createUser(userData);

  // Send a successful response
  sendResponse(res, {
    statusCode: httpStatus.HttpStatus.CREATED,
    success: true,
    message: `${result?.email} created successfully!`,
    data: result,
  });
});

const getAllUser = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const userData = req.body;

  const result = await UserService.getAllUser(userData);

  sendResponse<IUser[]>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: 'Users Retrieved successfully!',
    data: result,
  });
});

const getSingleUser = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const { id } = req.params;

  const result = await UserService.getSingleUser(id);

  sendResponse<IUser>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: 'User Retrieved successfully!',
    data: result,
  });
});

const updateUser = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const { id } = req.params;

  const updatedUser = req.body;

  const result = await UserService.updateUser(id, updatedUser);

  sendResponse<IUser>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: 'User Updated successfully!',
    data: result,
  });
});

const deleteUser = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');

  // Extract user ID from the request parameters
  const {id} = req.params;
  console.log(id)

  // Call the service to delete the user
  const result = await UserService.deleteUser(id);

  // Send a successful response
  sendResponse(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: `User deleted successfully!`,
    // data: result,
  });
});

export const UserController = {
  createUser,
  getAllUser,
  getSingleUser,
  updateUser,
  deleteUser,
};
