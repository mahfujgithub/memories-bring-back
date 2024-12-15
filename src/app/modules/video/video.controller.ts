import catchAsync from '../../../shared/catchAsync';
import { Request, Response } from 'express';
import { VideoItemService } from './video.service';
import sendResponse from '../../../shared/sendResponse';
import { IVideoItem } from './video.interface';

// create menu
const createVideoItem = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const item = req.body;
  const result = await VideoItemService.createVideoItem(item);

  sendResponse<IVideoItem>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: `Item created successfully!`,
    data: result,
  });
});

// get all video
const getVideoItems = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const item = req.body;
  const result = await VideoItemService.getVideoItems(item);

  sendResponse<IVideoItem[]>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: 'Item Retrieved SuccessFully',
    data: result,
  });
});



// delete video
const removeVideoItem = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const { id } = req.params;
  const result = await VideoItemService.removeVideoItem(id);

  sendResponse<IVideoItem>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: 'Delete Video SuccessFully',
    data: result,
  });
});

export const VideoItemController = {
  createVideoItem,
  getVideoItems,
  removeVideoItem,
};
