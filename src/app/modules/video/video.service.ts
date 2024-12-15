import ApiError from '../../../errors/ApiError';
import { IVideoItem } from './video.interface';
import { VideoItem } from './video.model';

//  create menu
const createVideoItem = async (item: IVideoItem) => {
  const httpStatus = await import('http-status-ts');

  const existingVideo = await VideoItem.findOne({
    url: item.url
  });

  // If a duplicate is found, throw an error or handle it as needed
  if (existingVideo) {
    throw new ApiError(
      httpStatus.HttpStatus.CONFLICT,
      'Video already exists!',
    );
  }

  // Create the new video item if no duplicate is found
  const result = await VideoItem.create(item);
  return result;
};

// get all menu
const getVideoItems = async (item: IVideoItem) => {
  const result = await VideoItem.find(item).sort({ createdAt: -1 });
  return result;
};



// delete video
const removeVideoItem = async (id: string) => {
  const result = await VideoItem.findByIdAndDelete(id);
  return result;
};

export const VideoItemService = {
  createVideoItem,
  getVideoItems,
  removeVideoItem,
};
