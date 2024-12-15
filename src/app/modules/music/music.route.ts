import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { MusicItemValidation } from './music.validation';
import { MusicItemController } from './music.controller';
// import { StoreyItemValidation } from './music.validation';
// import { SliderItemController } from './music.controller';
const router = express.Router();

router.post(
  '/create',
  validateRequest(MusicItemValidation.createMusicItemZodSchema),
  MusicItemController.createMusicItem,
);

router.get('/', MusicItemController.getMusicItems);


// delete slider
router.delete('/:id', MusicItemController.removeStoreyItem);

export const MusicRoutes = router;
