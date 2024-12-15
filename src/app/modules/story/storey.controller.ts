import catchAsync from '../../../shared/catchAsync';
import { Request, Response } from 'express';
import { StoreyItemService } from './storey.service';
import sendResponse from '../../../shared/sendResponse';
import { IStoreyItem } from './storey.interface';

// create menu
const createStoreyItem = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const item = req.body;
  const result = await StoreyItemService.createStoreyItem(item);

  sendResponse<IStoreyItem>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: `Item created successfully!`,
    data: result,
  });
});

// get all story
const getStoreyItems = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const item = req.body;
  const result = await StoreyItemService.getStoreyItems(item);

  sendResponse<IStoreyItem[]>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: 'Item Retrieved SuccessFully',
    data: result,
  });
});

const getSingleStoreyItem = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const { id } = req.params;

  const result = await StoreyItemService.getSingleStoreyItem(id);

  sendResponse<IStoreyItem>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: 'Storey Item Retrieved successfully!',
    data: result,
  });
});

// update single story
const updateStoreyItem = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const { id } = req.params;

  const updatedItem = req.body;

  const result = await StoreyItemService.updateStoreyItem(id, updatedItem);

  sendResponse<IStoreyItem>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: 'Item Updated SuccessFully',
    data: result,
  });
});

// delete story
const removeStoreyItem = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const { id } = req.params;
  const result = await StoreyItemService.removeStoreyItem(id);

  sendResponse<IStoreyItem>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: 'Delete Storey SuccessFully',
    data: result,
  });
});

export const SliderItemController = {
  createStoreyItem,
  getStoreyItems,
  getSingleStoreyItem,
  updateStoreyItem,
  removeStoreyItem,
};
