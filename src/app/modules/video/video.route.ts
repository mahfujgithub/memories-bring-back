import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { VideoItemValidation } from './video.validation';
import { VideoItemController } from './video.controller';
const router = express.Router();

router.post(
  '/create',
  validateRequest(VideoItemValidation.createVideoItemZodSchema),
  VideoItemController.createVideoItem,
);

router.get('/', VideoItemController.getVideoItems);

// delete video
router.delete('/:id', VideoItemController.removeVideoItem);

export const VideoRoutes = router;
