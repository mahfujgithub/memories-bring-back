import ApiError from '../../../errors/ApiError';
import { ISliderItem } from './slider.interface';
import { SliderItem } from './slider.model';

//  create menu
const createSliderItem = async (item: ISliderItem) => {
  const httpStatus = await import('http-status-ts');

  const existingSlider = await SliderItem.findOne({
    title: item.title,
    des: item.des,
    img: item.img,
  });

  // If a duplicate is found, throw an error or handle it as needed
  if (existingSlider) {
    throw new ApiError(httpStatus.HttpStatus.CONFLICT, 'Slider already exists!');
  }

  // Create the new menu item if no duplicate is found
  const result = await SliderItem.create(item);
  return result;
};

// get all menu
const getSliderItems = async(item: ISliderItem) => {
    const result = await SliderItem.find(item).sort({ createdAt: -1 });
    return result
}

const updateSliderItem = async (
  _id: string,
  payload: Partial<ISliderItem>,
): Promise<ISliderItem | null> => {
  const httpStatus = await import('http-status-ts');
  const isExist = await SliderItem.findById(_id);

  if (!isExist) {
    throw new ApiError(httpStatus.HttpStatus.NOT_FOUND, 'Item not found!');
  }

  const { ...sliderItemData } = payload;

  const updatedItemData: Partial<ISliderItem> = { ...sliderItemData };

  const result = await SliderItem.findByIdAndUpdate({ _id }, updatedItemData, {
    new: true,
  });
  return result;
};

// delete menu
const removeSliderItem = async(id: string)=> {
    const result = await SliderItem.findByIdAndDelete(id)
    return result
}

export const SliderItemService = {
  createSliderItem,
  getSliderItems,
  updateSliderItem,
  removeSliderItem,
};