import { Model } from 'mongoose';

export type IEvent = {
  title: string;
  des: string;
};

export type EventModel = Model<IEvent, Record<string, unknown>>;
