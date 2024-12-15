import catchAsync from '../../../shared/catchAsync';
import { Request, Response } from 'express';
import { GalleryService } from './gallery.service';
import sendResponse from '../../../shared/sendResponse';
import { IGalleryItem } from './gallery.interface';

// create gallery
const createGalleryItem = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const item = req.body;
  const result = await GalleryService.createGalleryItem(item);

  sendResponse<IGalleryItem>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: `Item created successfully!`,
    data: result,
  });
});

// get items
const getGalleryItems = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const item = req.body;
  const result = await GalleryService.getGalleryItems(item);

  sendResponse<IGalleryItem[]>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: 'Items Retrieved SuccessFully',
    data: result,
  });
});

// update single gallery
const updateGalleryItem = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const { id } = req.params;

  const updatedItem = req.body;

  const result = await GalleryService.updateGalleryItem(id, updatedItem);

  sendResponse<IGalleryItem>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: 'Item Updated SuccessFully',
    data: result,
  });
});

// delete gallery
const removeGalleryItem = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const { id } = req.params;
  const result = await GalleryService.removeGalleryItem(id);

  sendResponse<IGalleryItem>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: 'Item Delete SuccessFully',
    data: result,
  });
});

export const GalleryController = {
  createGalleryItem,
  getGalleryItems,
  updateGalleryItem,
  removeGalleryItem,
};
