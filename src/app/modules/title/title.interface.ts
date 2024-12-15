import { Model } from 'mongoose';

export type ITitle = {
  title: string;
  des: string;
};

export type TitleModel = Model<ITitle, Record<string, unknown>>;
