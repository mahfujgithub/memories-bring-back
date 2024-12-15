import { Model } from 'mongoose';

export type IVideoItem = {
  url: string;
};

export type VideoItemModel = Model<IVideoItem, Record<string, unknown>>;