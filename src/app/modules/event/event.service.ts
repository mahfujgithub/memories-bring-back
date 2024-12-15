import ApiError from '../../../errors/ApiError';
import { IEvent } from './event.interface';
import { Event } from './event.model';

//  create menu
const createEvent = async (item: IEvent) => {
  const httpStatus = await import('http-status-ts');

  const existingEvent = await Event.findOne({
    title: item.title,
    des: item.des,
  });

  // If a duplicate is found, throw an error or handle it as needed
  if (existingEvent) {
    throw new ApiError(
      httpStatus.HttpStatus.CONFLICT,
      'Event already exists!',
    );
  }

  // Create the new menu item if no duplicate is found
  const result = await Event.create(item);
  return result;
};

// get all menu
const getEvents = async (item: IEvent) => {
  const result = await Event.find(item).sort({ createdAt: -1 });
  return result;
};

const getSingleEvent = async (id: string): Promise<IEvent | null> => {
  const result = await Event.findById(id);

  return result;
};

const updateEvent = async (
  _id: string,
  payload: Partial<IEvent>,
): Promise<IEvent | null> => {
  const httpStatus = await import('http-status-ts');
  const isExist = await Event.findById(_id);

  if (!isExist) {
    throw new ApiError(httpStatus.HttpStatus.NOT_FOUND, 'Item not found!');
  }

  const { ...eventItemData } = payload;

  const updatedItemData: Partial<IEvent> = { ...eventItemData };

  const result = await Event.findByIdAndUpdate({ _id }, updatedItemData, {
    new: true,
  });
  return result;
};

// delete menu
const removeEvent = async (id: string) => {
  const result = await Event.findByIdAndDelete(id);
  return result;
};

export const EventService = {
  createEvent,
  getEvents,
  getSingleEvent,
  updateEvent,
  removeEvent,
};
