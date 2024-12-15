import { model, Schema } from 'mongoose';
import { IMusicItem, MusicItemModel } from './music.interface';

export const MusicSchema = new Schema<IMusicItem, MusicItemModel>(
  {
    musicUrl: {
      type: [String],
      required: true,
    },
    
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
);

export const MusicItem = model<IMusicItem, MusicItemModel>('music', MusicSchema);
