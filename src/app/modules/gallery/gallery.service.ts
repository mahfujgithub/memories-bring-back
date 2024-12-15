import ApiError from '../../../errors/ApiError';
import { IGalleryItem } from './gallery.interface';
import { GalleryItem } from './gallery.model';

//  create menu
const createGalleryItem = async (item: IGalleryItem) => {
  const httpStatus = await import('http-status-ts');

  const existingItem = await GalleryItem.findOne({
    title: item.title,
    img: item.img,
    url: item.url
  });

  // If a duplicate is found, throw an error or handle it as needed
  if (existingItem) {
    throw new ApiError(
      httpStatus.HttpStatus.CONFLICT,
      'Item already exists!',
    );
  }

  // Create the new menu item if no duplicate is found
  const result = await GalleryItem.create(item);
  return result;
};

// get all menu
const getGalleryItems = async (items: IGalleryItem) => {
  const result = await GalleryItem.find(items).sort({ createdAt: -1 });
  return result;
};

const updateGalleryItem = async (
  _id: string,
  payload: Partial<IGalleryItem>,
): Promise<IGalleryItem | null> => {
  const httpStatus = await import('http-status-ts');
  const isExist = await GalleryItem.findById(_id);

  if (!isExist) {
    throw new ApiError(httpStatus.HttpStatus.NOT_FOUND, 'Item not found!');
  }

  const { ...galleryItemData } = payload;

  const updatedItemData: Partial<IGalleryItem> = { ...galleryItemData };

  const result = await GalleryItem.findByIdAndUpdate({ _id }, updatedItemData, {
    new: true,
  });
  return result;
};

// delete menu
const removeGalleryItem = async (id: string) => {
  const result = await GalleryItem.findByIdAndDelete(id);
  return result;
};

export const GalleryService = {
  createGalleryItem,
  getGalleryItems,
  updateGalleryItem,
  removeGalleryItem,
};
