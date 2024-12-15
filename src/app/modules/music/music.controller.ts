import catchAsync from '../../../shared/catchAsync';
import { Request, Response } from 'express';
import { MusicItemService } from './music.service';
import { IMusicItem } from './music.interface';
import sendResponse from '../../../shared/sendResponse';


// create menu
const createMusicItem = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const item = req.body;
  const result = await MusicItemService.createMusicItem(item);

  sendResponse<IMusicItem>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: `Item created successfully!`,
    data: result,
  });
});

// get all slider
const getMusicItems = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const item = req.body;
  const result = await MusicItemService.getMusicItems(item);

  sendResponse<IMusicItem[]>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: 'Item Retrieved SuccessFully !!',
    data: result,
  });
});


// delete slider
const removeStoreyItem = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const { id } = req.params;
  const result = await MusicItemService.removeMusicItem(id);

  sendResponse<IMusicItem>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: 'Delete music SuccessFully',
    data: result,
  });
});

export const MusicItemController = {
  createMusicItem,
  getMusicItems,
  removeStoreyItem,
};
