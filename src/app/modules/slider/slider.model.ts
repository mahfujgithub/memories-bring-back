import { model, Schema } from 'mongoose';
import { SliderItemModel, ISliderItem } from './slider.interface';

export const SliderSchema = new Schema<ISliderItem, SliderItemModel>(
  {
    title: {
      type: String,
      required: true,
    },
    des: {
      type: String,
      required: true,
    },
    img: {
      type: String,
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

export const SliderItem = model<ISliderItem, SliderItemModel>('Slider', SliderSchema);
