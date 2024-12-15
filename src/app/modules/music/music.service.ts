
import { IMusicItem } from './music.interface';
import { MusicItem } from './music.model';


//  create musinc
const createMusicItem = async (item: IMusicItem) => {

  // Create the new music item if no duplicate is found
  const result = await MusicItem.create(item);
  return result;
};

// get all music
const getMusicItems = async (item: IMusicItem) => {
  const result = await MusicItem.find(item).sort({ createdAt: -1 });
  return result;
};



// delete music
const removeMusicItem = async (id: string) => {
  const result = await MusicItem.findByIdAndDelete(id);
  return result;
};

export const MusicItemService = {
  createMusicItem,
  getMusicItems,
  removeMusicItem,
};
