"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MusicItemService = void 0;
const music_model_1 = require("./music.model");
//  create musinc
const createMusicItem = async (item) => {
    // Create the new music item if no duplicate is found
    const result = await music_model_1.MusicItem.create(item);
    return result;
};
// get all music
const getMusicItems = async (item) => {
    const result = await music_model_1.MusicItem.find(item).sort({ createdAt: -1 });
    return result;
};
// delete music
const removeMusicItem = async (id) => {
    const result = await music_model_1.MusicItem.findByIdAndDelete(id);
    return result;
};
exports.MusicItemService = {
    createMusicItem,
    getMusicItems,
    removeMusicItem,
};
