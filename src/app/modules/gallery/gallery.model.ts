import { model, Schema } from 'mongoose';
import { GalleryItemModel, IGalleryItem } from './gallery.interface';

export const GalleryItemSchema = new Schema<IGalleryItem, GalleryItemModel>(
  {
    title: {
      type: String,
      required: false,
    },
    img: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: false,
    },
    videoUrl: {
      type: String,
      required: false,
    },
    zoom: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
);

export const GalleryItem = model<IGalleryItem, GalleryItemModel>(
  'Gallery',
  GalleryItemSchema,
);

