import catchAsync from '../../../shared/catchAsync';
import { Request, Response } from 'express';
import { EventService } from './event.service';
import sendResponse from '../../../shared/sendResponse';
import { IEvent } from './event.interface';

// create event here
const createEventItem = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const item = req.body;
  const result = await EventService.createEvent(item);

  sendResponse<IEvent>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: `Item created successfully!`,
    data: result,
  });
});

// get all event here
const getEventItems = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const item = req.body;
  const result = await EventService.getEvents(item);

  sendResponse<IEvent[]>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: 'Item Retrieved SuccessFully',
    data: result,
  });
});

const getSingleEventItem = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const { id } = req.params;

  const result = await EventService.getSingleEvent(id);

  sendResponse<IEvent>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: 'Event Item Retrieved successfully!',
    data: result,
  });
});

// update single event
const updateEventItem = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const { id } = req.params;

  const updatedItem = req.body;

  const result = await EventService.updateEvent(id, updatedItem);

  sendResponse<IEvent>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: 'Item Updated SuccessFully',
    data: result,
  });
});

// delete event
const removeEventItem = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const { id } = req.params;
  const result = await EventService.removeEvent(id);

  sendResponse<IEvent>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: 'Delete Event SuccessFully',
    data: result,
  });
});

export const EventItemController = {
  createEventItem,
  getEventItems,
  getSingleEventItem,
  updateEventItem,
  removeEventItem,
};
