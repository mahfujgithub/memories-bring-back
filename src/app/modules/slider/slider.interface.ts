import { Model } from 'mongoose';

export type ISliderItem = {
  title: string;
  des: string;
  img: string;
};

export type SliderItemModel = Model<ISliderItem, Record<string, unknown>>;
