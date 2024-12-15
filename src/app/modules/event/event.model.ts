import { model, Schema } from 'mongoose';
import { EventModel, IEvent } from './event.interface';

export const EventSchema = new Schema<IEvent, EventModel>(
  {
    title: {
      type: String,
      required: true,
    },
    des: {
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

export const Event = model<IEvent, EventModel>('Event', EventSchema);
