import { model, Schema } from 'mongoose';
import { TitleModel, ITitle } from './title.interface';

export const TitleSchema = new Schema<ITitle, TitleModel>(
  {
    title: {
      type: String,
      required: true,
    },
    des: {
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

export const Title = model<ITitle, TitleModel>('Title', TitleSchema);
