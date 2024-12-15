import { Model } from 'mongoose';

export type IGalleryItem = {
  title?: string;
  img: string;
  url?: string;
  zoom?:string;
  videoUrl?:string
};

export type GalleryItemModel = Model<IGalleryItem, Record<string, unknown>>;
