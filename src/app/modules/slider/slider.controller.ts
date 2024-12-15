import catchAsync from '../../../shared/catchAsync';
import { Request, Response } from 'express';
import { SliderItemService } from './slider.service';
import sendResponse from '../../../shared/sendResponse';
import { ISliderItem } from './slider.interface';

// create menu
const createSliderItem = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const item = req.body;
  const result = await SliderItemService.createSliderItem(item);

  sendResponse<ISliderItem>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: `Item created successfully!`,
    data: result,
  });
});

// get all slider
const getSliderItems = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const item = req.body;
  const result = await SliderItemService.getSliderItems(item);

  sendResponse<ISliderItem[]>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: 'Item Retrieved SuccessFully',
    data: result,
  });
});

// update single slider
const updateSliderItem = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const { id } = req.params;

  const updatedItem = req.body;

  const result = await SliderItemService.updateSliderItem(id, updatedItem);

  sendResponse<ISliderItem>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: 'Item Updated SuccessFully',
    data: result,
  });
});

// delete slider
const removeSliderItem = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const { id } = req.params;
  const result = await SliderItemService.removeSliderItem(id);

  sendResponse<ISliderItem>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: 'Delete Slider SuccessFully',
    data: result,
  });
});

export const SliderItemController = {
  createSliderItem,
  getSliderItems,
  updateSliderItem,
  removeSliderItem,
};
