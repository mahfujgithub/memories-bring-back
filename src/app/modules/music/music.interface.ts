import { Model } from 'mongoose';

export type IMusicItem = {
  musicUrl: string[];
};

export type MusicItemModel = Model<IMusicItem, Record<string, unknown>>;