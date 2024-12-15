"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MusicRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const music_validation_1 = require("./music.validation");
const music_controller_1 = require("./music.controller");
// import { StoreyItemValidation } from './music.validation';
// import { SliderItemController } from './music.controller';
const router = express_1.default.Router();
router.post('/create', (0, validateRequest_1.default)(music_validation_1.MusicItemValidation.createMusicItemZodSchema), music_controller_1.MusicItemController.createMusicItem);
router.get('/', music_controller_1.MusicItemController.getMusicItems);
// delete slider
router.delete('/:id', music_controller_1.MusicItemController.removeStoreyItem);
exports.MusicRoutes = router;
