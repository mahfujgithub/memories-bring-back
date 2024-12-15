import { model, Schema } from 'mongoose';
import {VideoItemModel, IVideoItem } from './video.interface';

export const VideoSchema = new Schema<IVideoItem, VideoItemModel>(
  {
    url: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
);

export const VideoItem = model<IVideoItem, VideoItemModel>('Video', VideoSchema);
