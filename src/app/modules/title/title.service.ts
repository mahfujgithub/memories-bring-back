import ApiError from '../../../errors/ApiError';
import { ITitle } from './title.interface';
import { Title } from './title.model';

//  create menu
const createTitle = async (item: ITitle) => {
  const httpStatus = await import('http-status-ts');

  const existingStorey = await Title
  .findOne({
    title: item.title,
    des: item.des,
  });

  // If a duplicate is found, throw an error or handle it as needed
  if (existingStorey) {
    throw new ApiError(
      httpStatus.HttpStatus.CONFLICT,
      'Slider already exists!',
    );
  }

  // Create the new menu item if no duplicate is found
  const result = await Title.create(item);
  return result;
};

// get all menu
const getTitles = async (item: ITitle) => {
  const result = await Title.find(item).sort({ createdAt: -1 });
  return result;
};

const getSingleTitle = async (id: string): Promise<ITitle | null> => {
  const result = await Title.findById(id);

  return result;
};

const updateTitle = async (
  _id: string,
  payload: Partial<ITitle>,
): Promise<ITitle | null> => {
  const httpStatus = await import('http-status-ts');
  const isExist = await Title.findById(_id);

  if (!isExist) {
    throw new ApiError(httpStatus.HttpStatus.NOT_FOUND, 'Item not found!');
  }

  const { ...sliderItemData } = payload;

  const updatedItemData: Partial<ITitle> = { ...sliderItemData };

  const result = await Title.findByIdAndUpdate({ _id }, updatedItemData, {
    new: true,
  });
  return result;
};

// delete menu
const removeTitle = async (id: string) => {
  const result = await Title.findByIdAndDelete(id);
  return result;
};

export const TitleService = {
  createTitle,
  getTitles,
  getSingleTitle,
  updateTitle,
  removeTitle
};
